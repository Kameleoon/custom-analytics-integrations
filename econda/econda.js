// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processEconda = function() {
    let data = [[name, variationName]];
    econdaObject.send({ type: "event", abtest: data });
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.emos3 != null && window.emos3.send != null;
}, processEconda, 150);