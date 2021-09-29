// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processMixpanel = function() {
    mixpanel.track("$experiment_started", {
        "Experiment name": name,
        "Variant name": variationName,
        $source: "kameleoon"
    });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.mixpanel != null;
}, processMixpanel, 150);