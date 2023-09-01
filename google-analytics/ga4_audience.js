// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Optional : send data to a specific web data stream by providing a Measurement ID (replace G-XXXXXXXXXXX by your Measurement ID)
const gtagMeasurementID = "G-XXXXXXXXXXX";

const processGA4Audience = function () {
    window.gtag("event", "experience_impression", {
        exp_variant_string: `KAM-${id}-${variationID}`,
        send_to: gtagMeasurementID
    });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.gtag != null;
}, processGA4Audience, 150);
