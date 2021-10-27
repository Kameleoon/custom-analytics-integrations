const isExperiment = experimentName ? true : false;

const processSegment = function() {
    const analytics = window.analytics;
    if (isExperiment) {
        analytics.track("Experiment Viewed", {
            experimentID: experimentID,
            experimentName: experimentName,
            variationId: variationId,
            variationName: variationName,
            nonInteraction: 1
        });
        analytics.identify({
            Experiment: experimentName + ":" + variationName
        });
    } else {
        analytics.track("Personalization Viewed", {
            personalizationID: personalizationID,
            personalizationName: personalizationName,
            variationId: variationId,
            variationName: variationName,
            nonInteraction: 1
        });
        analytics.identify({
            Personalization: personalizationName + ":" + variationName
        });
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.analytics != null;
}, processSegment, 150);