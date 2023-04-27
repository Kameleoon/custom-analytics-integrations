// Documentation  https://developers.atinternet-solutions.com/piano-analytics/

//If you use SmartTag SDKs, define the name of the instance variable name of smart tag on your website
//(https://developers.atinternet-solutions.com/piano-analytics/data-collection/general/migrate-from-smarttag#smarttag---pa-tagging-winter-2020)
const smartTag = window["yourSmartTag"];
//If you use  new Piano Analytics SDKs, just don't define that variable.
//(you can see window.pa variable in console on your website)

// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processEventPiano = function() {
    let versionTag =
		(smartTag && smartTag.version) || (window.pa && window.pa.cfg && window.pa.cfg.getConfiguration("version"));
    let escapedName = name.replace(/[\/#&]/gi, "-");
    let data = {
        mv_creation: variationID + "[" + name + "]",
        mv_test: id + "[" + escapedName + "]",
        mv_wave: 1
    };

    if (smartTag && versionTag < "6") {
        smartTag.events && smartTag.events.send && smartTag.events.send("mv_test.display", data);
    } else {
        window.pa && window.pa.sendEvent && window.pa.sendEvent("mv_test.display", data);
    }
};
 
Kameleoon.API.Core.runWhenConditionTrue(function() {
    let versionTag = (smartTag && smartTag.version) || (window.pa && window.pa.cfg && window.pa.cfg.getConfiguration("version"));
    return versionTag &&
        (smartTag?.privacy?.getVisitorMode()?.name == "optin" || 
            window.pa?.privacy?.getMode() == "optin");
}, processEventPiano, 150);