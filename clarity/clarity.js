// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processClarity = function() {
    window.clarity("set", "KameleoonCampaignID", id);
    window.clarity("set", "KameleoonCampaignName", name);
    window.clarity("set", "KameleoonVariationID", variationID);
    window.clarity("set", "KameleoonVariationName", variationName);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.clarity != null;
}, processClarity, 150);