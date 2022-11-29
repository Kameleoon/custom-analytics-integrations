// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;
// Define the name of the current variation
const name = variationName === "Reference" ? "Original" : variationName;
const processCrazyegg = function () {
    window.CE_SNAPSHOT_NAME = `${id}-${name}`;
};
Kameleoon.API.Core.runWhenConditionTrue(
    function () {
        return window.CE2 !== undefined;
    },
    processCrazyegg,
    150
);
