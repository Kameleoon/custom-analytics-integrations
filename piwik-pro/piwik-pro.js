// Define the name of the current experiment or personalization
const campaignName = experimentName ? experimentName : personalizationName;

// Define your Piwik Pro custom dimension
const piwikProCustomDimension = "5";

const processPiwikPro = function() {
    window._paq.push(["setCustomDimensionValue", piwikProCustomDimension, campaignName + variationName]);
    window._paq.push(["trackEvent", "Kameleoon", campaignName, variationName]);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window._paq != null;
}, processPiwikPro, 150);