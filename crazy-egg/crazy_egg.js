// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define your crazy egg custom variable
const crazyEggCustomVariable = 1;

const processCrazyEgg = function () {
    let escapedName = name.replace(/\//gi, "-");
    window.CE2.set(crazyEggCustomVariable,
        "/Kameleoon/" + escapedName + "/" + encodeURIComponent(variationName)
    );
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.CE2 != null;
}, processCrazyEgg, 150);