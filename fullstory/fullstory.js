// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Variable to prevent to send data twice
window.fullstory_triggered_campaigns = window.fullstory_triggered_campaigns || [];

const processFullstory = function () {
    if (fullstory_triggered_campaigns.indexOf(id) == -1) {
        let fsEventPayload = {};
        fsEventPayload.campaign = {};
        fsEventPayload.campaign.id_int = id;
        fsEventPayload.campaign.name_str = name;
        fsEventPayload.variation = {};
        fsEventPayload.variation.id_int = variationID;
        fsEventPayload.variation.name_str = variationName;
        let _fs = window[window["_fs_namespace"]];
        _fs().event('Kameleoon campaign', fsEventPayload, 'Kameleoon');
        fullstory_triggered_campaigns.push(id);
    }
};

Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window["fs_namespace"] != null && window[window["_fs_namespace"]];
}, processFullstory, 150);