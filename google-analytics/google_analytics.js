// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Define your own Google Analytics Tracker name
const googleAnalyticsTrackerName = "gtm";

const processGoogleAnalytics = function() {
    window._gaq = window._gaq || [];

    // Custom variable tracking (optional)
    const customVariable = 1;
    const command = [
        googleAnalyticsTrackerName + "._setCustomVar",
        customVariable,
        name,
        variationName,
        2
    ];
    window._gaq.push(command, true);

    // Page view tracking (optional)
    window._gaq.push([
        googleAnalyticsTrackerName + "._trackPageview",
        "/Kameleoon/" + name + "/" + variationName
    ], true);

    // Event tracking (optional)
    let command = [
        googleAnalyticsTrackerName + "._trackEvent",
        "Kameleoon",
        name,
        variationName,
        undefined,
        true
    ];
    window._gaq.push(command, true);
};

processGoogleAnalytics();