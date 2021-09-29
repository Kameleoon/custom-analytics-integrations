// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

const processKissMetrics = function() {
    window._kmq = window._kmq || [];
	let propertyObject = {};
	propertyObject[name] = variationName;
	window._kmq.push(["set", propertyObject]);
};

processKissMetrics();