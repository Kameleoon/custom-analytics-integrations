// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event name
const eventName = experimentID
  ? "kameleoon_experiment"
  : "kameleoon_personalization";

const processAir360 = function () {
  Air360.track("kameleoon", {
    event: eventName,
    campaign_id: id,
    campaign_name: name,
    variation_id: variationID,
    variation_name: variationName,
  });
};

Kameleoon.API.Core.runWhenConditionTrue(
  function () {
    return typeof window.Air360 != "undefined";
  },
  processAir360,
  150
);
