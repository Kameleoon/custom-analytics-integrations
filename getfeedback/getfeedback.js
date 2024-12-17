// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the event type
const eventType = experimentID ? "Experiment" : "Personalization";

const sendToGetFeedback = function () {
   window.usabilla_live("data", {
    event: eventType,
    campaign_id: id,
    campaign_name: name,
    variation_id: variationID,
    variation_name: variationName,
	 });
};

//Pass campaign information into GetFeedback
Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window.usabilla_live != null;
}, sendToGetFeedback, 150);