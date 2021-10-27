// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processMPathy = function() {
    const mPathyPrefix = id == 0 ? "MM_Prod_" : "MM_QA_";
    let segmentString =
        mPathyPrefix +
        variationName.replace(/\//gi, "-").replace(/#/g, "-").replace(/&/g, "-").replace(/ /g, "_") +
        "=Kameleoon:" +
        name.replace(/\//gi, "-").replace(/#/g, "-").replace(/&/g, "-").replace(/ /g, "_");
    window.Mpathy.setMMSegments(segmentString);
};


Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.Mpathy != null && window.Mpathy.setMMSegments != null;
}, processMPathy, 150);

