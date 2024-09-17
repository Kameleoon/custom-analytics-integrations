// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event type
const eventType = experimentID ? "Experiment" : "Personalization";

const processLogRocket = function () {
  window.LogRocket.track("Kameleoon", {
    event: eventType,
    campaign_id: id,
    campaign_name: name,
    variation_id: variationID,
    variation_name: variationName,
  });
};

//Pass campaign information into LogRocket
Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return window.LogRocket != null;
  },
  processLogRocket,
  150
);
