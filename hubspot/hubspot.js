// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event type
const eventType = experimentID ? "Experiment" : "Personalization";

const processHubspot = function () {
  window._hsq = window._hsq || [];

  window._hsq.push([
    "trackCustomBehavioralEvent",
    {
      name: "Kameleoon",
      properties: {
        type: eventType,
        campaign_id: id,
        campaign_name: name,
        variation_id: variationID,
        variation_name: variationName,
      },
    },
  ]);
};

processHubspot();
