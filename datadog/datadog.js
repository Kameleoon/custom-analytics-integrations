// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define if the current experiment or personalization is a feature flag
const isFeatureFlag = false;

const processDataDog = function () {
  let key = "";
  let value = "";

  if (isFeatureFlag) {
    const featureFlagConfiguration =
      Kameleoon.Internals.configuration.featureFlagConfiguration || {};

    for (const featureKey in featureFlagConfiguration) {
      if (
        featureFlagConfiguration[featureKey].rules.find(
          (rule) => rule.experimentId == action.id
        )
      ) {
        key = featureKey;
        break;
      }
    }

    value = variationID === 0 ? "off" : variationName;
  } else {
    key = `Kameleoon-${id}-${name}`;
    value = `${variationID}-${variationName}`;
  }

  window.DD_RUM.addFeatureFlagEvaluation(key, value);
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return typeof window.DD_RUM != "undefined";
  },
  processDataDog,
  150
);
