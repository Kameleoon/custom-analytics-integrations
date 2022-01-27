// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const id = experimentID ? experimentID : personalizationID;

// Define the prefix
const prefix = experimentID ? "AB" : "PERSO";

const processSnowplow = function() {
    snowplow("trackStructEvent", "Kameleoon", prefix + "_Kameleoon_" + id + "-" + name, variationName, "kameleoon_visitor_code", Kameleoon.API.Visitor.code);
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.snowplow != null;
}, processSnowplow, 150);