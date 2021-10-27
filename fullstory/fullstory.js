// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const processFullstory = function () {
    let fsEventPayload = {};
    fsEventPayload.campaign = {};
    fsEventPayload.campaign.id_int = id;
    fsEventPayload.campaign.name_str = name;
    fsEventPayload.variation = {};
    fsEventPayload.variation.id_int = variationID;
    fsEventPayload.variation.name_str = variationName;

    let _fs = window[window["_fs_namespace"]];
    _fs().event('Kameleoon campaign', fsEventPayload, 'Kameleoon');
};

Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window["fs_namespace"] != null && window[window["_fs_namespace"]];
}, processFullstory, 150);