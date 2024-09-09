// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processGA4GTM = function () {
    window.dataLayer.push({
        event: "experience_impression",
        exp_variant_string: `KAM-${id}-${variationID}`,
        kam_campaign_name: name,
        kam_campaign_id: id,
        kam_variation_name: variationName,
        kam_variation_id: variationID
    });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.dataLayer != null;
}, processGA4GTM, 150);