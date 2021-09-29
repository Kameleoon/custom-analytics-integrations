// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Variable to prevent to send data twice
window.amplitude_triggered_campaigns = window.amplitude_triggered_campaigns || [];

const processAmplitude = function() {
    if (amplitude_triggered_campaigns.indexOf(id) == -1) {
        const campaignProperties = {
            KameleoonCampaignID: id,
            KameleoonCampaignName: name,
            KameleoonVariationID: variationID,
            KameleoonVariationName: variationName
        };

        window.amplitude.getInstance().setUserProperties(campaignProperties);
        amplitude_triggered_campaigns.push(id);
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return typeof window.amplitude != "undefined" && typeof window.amplitude.Identify == "function";
}, processAmplitude, 150);