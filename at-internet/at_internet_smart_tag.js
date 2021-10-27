// Define the name of the instance variable name of smart tag on your website
const smartTagTrackingPredefinedTagName = "ATInternet";

// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processSmartTag = function() {
    const smartTag = window[smartTagTrackingPredefinedTagName];
    if (smartTag.mvTesting != null) {
        let escapedName = name.replace(/\//gi, "-").replace(/#/g, "-").replace(/&/g, "-");
        smartTag.mvTesting.set({
            test: id + "[" + escapedName + "]",
            waveId: 1,
            creation: variationId + "[" + encodeURIComponent(variationName) + "]"
        });
        smartTag.dispatch();
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    // Wait that smartTag is loaded and wait the optin before sending
    return window[smartTagTrackingPredefinedTagName] != null &&
    !(smartTag.privacy && smartTag.privacy.getVisitorMode() && smartTag.privacy.getVisitorMode().name != "optin");
}, processSmartTag, 150);