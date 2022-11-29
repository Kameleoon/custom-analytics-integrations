// Documentation  https://developers.atinternet-solutions.com/piano-analytics/

// Define the name of the instance variable name of smart tag on your website (if "AS2 tagging" used)
const smartTag = "tag";

// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processEventPiano = function() {
    let version_tag = window[smartTag]?.version || window.pa?.cfg?.getConfiguration('version') || [],
    escapedName = name.replace(/\//gi, "-").replace(/#/g, "-").replace(/&/g, "-"),
    data = {
        'mv_creation' : variationID + "[" + encodeURIComponent(variationName) + "]",
        'mv_test' : id + "[" + escapedName + "]",
        'mv_wave': 1, 
    };
    if (version_tag < "6" ){
        let A2S_tag = window[smartTag];
        A2S_tag.events.send('mv_test.display',data);

    } else {
        pa.sendEvent('mv_test.display',data);
    }
};
 
Kameleoon.API.Core.runWhenConditionTrue(function() {
    // Wait that smartTag is loaded and wait the optin before sending
    let version_tag = window[smartTag]?.version || window.pa?.cfg?.getConfiguration('version') || [],
    statusOptin = (version_tag < "6" && version_tag >= "5.21.0" && window[smartTag].privacy && window[smartTag].privacy.getVisitorMode() && window[smartTag].privacy.getVisitorMode().name == "optin") ||
            (version_tag >= "6" && pa.privacy && pa.privacy.getMode() && pa.privacy.getMode() == "optin");
    return statusOptin;
}, processEventPiano, 150);