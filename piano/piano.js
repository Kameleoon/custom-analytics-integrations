// Documentation  https://developers.atinternet-solutions.com/piano-analytics/

// Define the name of the instance variable name of smart tag on your website (if "AS2 tagging" used)
const smartTag = "tag";

// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processEventPiano = function() {
    let version_tag = window[smartTag]?.version || window.pa?.cfg?.getConfiguration('version') || [],
    escapedName = name.replace(/\//gi, "-").replace(/#/g, "-").replace(/&/g, "-");
    if (version_tag < "6" ){
        let Piano_tag = window[smartTag];
        Kameleoon.API.Core.runWhenConditionTrue(function() {
            return typeof Piano_tag.events.send != "undefined";
        }, function(){
            Piano_tag.events.send('mv_test.display',{
                'mv_creation' : variationID + "[" + encodeURIComponent(variationName) + "]",
                'mv_test' : id + "[" + escapedName + "]",
                'mv_wave': 1,
            });
        }, 150);

    } else {
        pa.sendEvent('mv_test.display',{
            'mv_creation' : variationID + "[" + encodeURIComponent(variationName) + "]",
            'mv_test' : id + "[" + escapedName + "]",
            'mv_wave': 1,
        });
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    // Wait that smartTag is loaded and wait the optin before sending
    let version_tag = window[smartTag]?.version || window.pa?.cfg?.getConfiguration('version') || [],
        statusOptin = version_tag && !(version_tag < "6" && version_tag >= "5.21.0" && window[smartTag].privacy && window[smartTag].privacy.getVisitorMode() && window[smartTag].privacy.getVisitorMode().name != "optin") ||
        !(version_tag >= "6" && pa.privacy && pa.privacy.getMode() && pa.privacy.getMode().name != "optin");
    return statusOptin;
}, processEventPiano, 150);