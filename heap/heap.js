// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processHeap = function() {
    heap.track("Kameleoon", {
        name: name,
        variationName: variationName
    });
    heap.addUserProperties({ experimentName: name, variationName: variationName });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.heap != null;
}, processHeap, 150);