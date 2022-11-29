// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processAmplitude = function() {
    const identify = new amplitude.Identify();
    identify
        .set("KameleoonCampaignID", id)
        .set("KameleoonCampaignName", name)
        .set("KameleoonVariationID", variationID)
        .set("KameleoonVariationName", variationName)
    amplitude.identify(identify);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return typeof window.amplitude != "undefined" && typeof window.amplitude.Identify == "function";
}, processAmplitude, 150);