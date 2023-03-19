const isExperiment = experimentName ? true : false;

const processMParticle = function() {
    const mParticle = window.mParticle;
    if (isExperiment) {
        mParticle.logEvent(
            'Experiment Viewed',
            mParticle.EventType.Other,
            {
                experimentID: experimentID,
                experimentName: experimentName,
                variationID: variationID,
                variationName: variationName,
            }
        );          
    } else {
        mParticle.logEvent(
            'Personalization Viewed',
            mParticle.EventType.Other,
            {
                personalizationID: personalizationID,
                personalizationName: personalizationName,
                variationID: variationID,
                variationName: variationName
            }
        );          
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.mParticle != null;
}, processMParticle, 150);