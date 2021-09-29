// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processWebtrends = function() {
    window.dcsMultiTrack("WT.z_NomTest_Version", name + "_" + variationName);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.dcsMultiTrack != null;
}, processWebtrends, 150);