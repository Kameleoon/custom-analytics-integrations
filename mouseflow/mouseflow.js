// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processMouseflow = function () {
    window._mfq.push(["setVariable", id + "-" + name, variationName]);
};

Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window._mfq != null;
}, processMouseflow, 150);