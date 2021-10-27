// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processAmplitude = function() {
    const campaignProperties = {
        KameleoonCampaignID: id,
        KameleoonCampaignName: name,
        KameleoonVariationID: variationID,
        KameleoonVariationName: variationName
    };

    window.amplitude.getInstance().setUserProperties(campaignProperties);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return typeof window.amplitude != "undefined" && typeof window.amplitude.Identify == "function";
}, processAmplitude, 150);