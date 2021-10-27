// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the prefix
const prefix = experimentID ? "AB" : "PERSO";

const processContentSquare = function() {
    window._uxa.push([
        "trackDynamicVariable",
        {
            key: prefix + "_Kameleoon_" + id,
            value: (variationID === 0 ? "reference" : variationID).toString()
        }
    ]);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window._uxa != null;
}, processContentSquare, 150);