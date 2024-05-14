// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event type
const eventType = experimentID ? "Experiment" : "Personalization";

const processGlassBox = function () {
  window._detector.triggerCustomEventMap("Kameleoon", {
    event: eventType,
    campaign_id: id,
    campaign_name: name,
    variation_id: variationID,
    variation_name: variationName,
  });
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return typeof window._detector != "undefined";
  },
  processGlassBox,
  150
);
