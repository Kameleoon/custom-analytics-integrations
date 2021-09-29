// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processEulerian = function() {
    let param = {};
    let key = "kameleoonSlot-1";
    let data = name.replace(/\//gi, "-") + "//" + variationName.replace(/\//gi, "-");
    param[key] = data;
    window._oEa.uparam();
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window._oEa != undefined && window._oEa.uparam != undefined;
}, processEulerian, 150);