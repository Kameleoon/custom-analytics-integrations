// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processSmartlook = function () {
    const properties = {
        "test/variation": `${id} - ${name} - ${variationID} - ${variationName}`,
    };

    window.smartlook('track', "Kameleoon campaign", properties);
};

Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window.smartlook != null;
}, processSmartlook, 150);