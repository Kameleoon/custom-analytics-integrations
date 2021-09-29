// Define webtrekk variable name
const webtrekkVariableName = "wt";

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

const processWebtrekk = function() {
    const webtrekkObject = window[webtrekkVariableName];
    let data = {1: variationId};
    webtrekkObject.sendinfo({
        linkId: "kameleoon_" + id + "_" + variationName,
        customClickParameter: data
    });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window[webtrekkVariableName] != null;
}, processWebtrekk, 150);