// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processGlassBox = function () {
  window._detector.triggerABTestingEvent("Kameleoon", String(id), name, String(variationID), variationName);
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return typeof window._detector != "undefined";
  },
  processGlassBox,
  150
);