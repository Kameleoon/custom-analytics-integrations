if (!window.sessioncamConfiguration) {
    window.sessioncamConfiguration = new Object();
}
if (!window.sessioncamConfiguration.customDataObjects) {
    window.sessioncamConfiguration.customDataObjects = [];
}
// Define the type
const type = experimentID ? "Kameleoon Experiment Id" : "Kameleoon Personalization Id";

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

const campaignData = {
    key: type,
    value: id,
};
const variationData = {
    key: "Kameleoon Variation Name",
    value: variationName,
};

window.sessioncamConfiguration.customDataObjects.push(campaignData, variationData);
