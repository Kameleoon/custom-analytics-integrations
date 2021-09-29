// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Define the prefix
const prefix = experimentId ? "AB" : "PERSO";

const processContentSquare = function() {
    window._uxa.push([
        "trackDynamicVariable",
        {
            key: prefix + "_Kameleoon_" + id,
            value: (variationId === 0 ? "reference" : variationId).toString()
        }
    ]);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window._uxa != null;
}, processContentSquare, 150);