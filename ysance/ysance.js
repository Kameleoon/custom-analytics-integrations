// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Define your custom variable
const ysanceCustomVariable = "";

const processYsance = function() {
    window._wt1Q.push([
        "setCustomData",
        ysanceCustomVariable,
        "[" + id + "]" + name + "[" + variationID + "]" + variationName
    ]);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window._wt1Q != null;
}, processYsance, 150);