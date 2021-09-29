// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define your Matomo custom variable
const matomoCustomVariable = "1";

const processMatomo = function() {
	window._paq = window._paq || [];
	window._paq.push([
		"setCustomVariable",
		matomoCustomVariable,
		name,
		variationName,
		"visit"
	]);
	window._paq.push([
        "trackLink",
        "https://kameleoonexperimentactivated.com/",
        "download"
    ]);
};

processMatomo();