const isExperiment = experimentName ? true : false;

const processRudderStack = function() {
    const rudderanalytics = window.rudderanalytics = [];

    if (isExperiment) {
        rudderanalytics.track("Experiment Viewed", {
            experimentID: experimentID,
            experimentName: experimentName,
            variationID: variationID,
            variationName: variationName,
            nonInteraction: 1
        });
    } else {
        rudderanalytics.track("Personalization Viewed", {
            personalizationID: personalizationID,
            personalizationName: personalizationName,
            variationID: variationID,
            variationName: variationName,
            nonInteraction: 1
        });
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.rudderanalytics != null;
}, processRudderStack, 150);