// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

// Define the prefix
const type = experimentID ? "AB" : "PERSO";

window._learnq = window._learnq || [];

_learnq.push(["track", "Kameleoon Tracking", {
    "type": type,
    "campaignID": id,
    "campaignName": name,
    "variationID": variationID,
    "variationName": variationName
}]);