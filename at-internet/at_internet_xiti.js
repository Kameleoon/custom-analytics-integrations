// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define formatted data to send
const data = `${id}[${name}]-0-${variationID}[${variationName}]`;

const processAtInternet = function() {
    window.xt_mvt(window.xtpage, window.xtn2, data);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.xt_mvt != null && window.xtsite != null;
}, processAtInternet, 150);