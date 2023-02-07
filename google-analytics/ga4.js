// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// if you want to send data to a specific Google GA4 MeasureID - use your own ID e.g. G-NDPJ085xyz
const gtagMeasurementID = 'default';

// Define the event name
const eventName = experimentID ? "Kameleoon Experiment" : "Kameleoon Personalization";

const processGA4 = function() {
    let properties = `${id} - ${name} - ${variationID} - ${variationName}`;
​
    window.gtag("event", eventName, {
        "send_to": gtagMeasurementID,
        "experiment_variation": properties, 
        "event_timeout": 2000
    });
}

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.gtag != null;
}, processGA4, 150);
