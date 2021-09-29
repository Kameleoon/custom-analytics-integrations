// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// if you want to send data to a specific Google GA4 MeasureID - use your own ID e.g. G-NDPJ085xyz
const gtagMeasurementID = 'default';

// Define the event name
const eventName = experimentId ? "Kameleoon Experiment" : "Kameleoon Personalization";

// Define gtag method if not present
window.dataLayer = window.dataLayer || [];
if (window.gtag == null) {
    window.gtag = function() {
        window.dataLayer.push(arguments);
    }
}

const processGA4 = function() {
    let properties = `${id} - ${name} - ${variationID} - ${variationName}`;
​
    window.gtag("event", eventName, {
        "send_to": gtagMeasurementID,
        "experiment_variation": properties, 
        "event_timeout": 2000
    });
}

processGA4();