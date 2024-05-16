// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processDataDog = function () {
  let featureFlagKey = "";
  let value = "";

  const featureFlagConfiguration =
    Kameleoon.Internals.configuration.featureFlagConfiguration || {};

  for (const featureKey in featureFlagConfiguration) {
    const foundRule = featureFlagConfiguration[featureKey].rules.find(
      (rule) => rule.experimentId === id
    );

    if (foundRule) {
      featureFlagKey = featureKey;
      break;
    }
  }

  if (featureFlagKey) {
    value = variationID === 0 ? "off" : variationName;
  } else {
    featureFlagKey = `Kameleoon-${id}-${name}`;
    value = `${variationID}-${variationName}`;
  }

  window.DD_RUM.addFeatureFlagEvaluation(featureFlagKey, value);
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return typeof window.DD_RUM != "undefined";
  },
  processDataDog,
  150
);
