// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event type
const eventType = experimentID ? "Experiment" : "Personalization";

// Define the ID of the event you want to manually trigger. This can be found in the EVENT -> Settings page in Quantum Metric.
const eventID = 1;

// Define the value of the Quantum Metric event.
const eventValue = `KAM-${id}-${action.associatedVariation.id}`;

const processQuantumMetric = function () {
  window.QuantumMetricAPI.sendEvent(eventID, 0, eventValue, {
    kam_campaign_type: eventType,
    kam_campaign_id: id,
    kam_campaign_name: name,
    kam_variation_id: variationID,
    kam_variation_name: variationName,
  });
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return (
      window.QuantumMetricAPI &&
      typeof window.QuantumMetricAPI.sendEvent === "function"
    );
  },
  processQuantumMetric,
  150
);
