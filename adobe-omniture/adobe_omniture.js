// Define your own adobe omniture variable name or let default variable name
const adobeOmnitureVariableName = "s";

// Define the evar that will contains the data
const eVar = "eVar123";

// Set the name of the experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processAdobeOmniture = function() {
    const adobeOmnitureObject = window.adobeOmnitureVariableName;
    adobeOmnitureObject.linkTrackVars = "";
    adobeOmnitureObject[eVar123] = name + " / " + variationName;
    adobeOmnitureObject.tl(true, "o", "Kameleoon Tracking");
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window[adobeOmnitureVariableName] != null;
}, processAdobeOmniture, 150);