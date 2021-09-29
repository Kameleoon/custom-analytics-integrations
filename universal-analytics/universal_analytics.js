// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

// Define your tracking universal analytics tracking ID or set it to null for default
const trackingID = null;

const processUniversalAnalytics = function() {
    let universalAnalyticsTrackerPrefix = obtainUniversalAnalyticsTrackerPrefix();

    // This part is for dimensions tracking
    const dimension = 50;
    window.ga(
        universalAnalyticsTrackerPrefix + "set",
        "dimension" + dimension,
        name + "/" + variationName.substring(0, 80)
    );

    // This part is for page view tracking
    let escapedName = name.replace(/\//gi, "-");
    window.ga(
        universalAnalyticsTrackerPrefix + "send",
        "pageview",
        "/Kameleoon/" + escapedName + "/" + encodeURIComponent(variationName)
    );

    // This part is for event tracking
    window.ga(
        universalAnalyticsTrackerPrefix + "send",
        "event",
        "Kameleoon",
        name,
        variationName,
        undefined,
        { nonInteraction: 1 }
    );
};

const obtainTrackerFromTrackingID = function() {
    let allTrackers = ga.getAll();
    if (trackingID) {
        for (let i = 0; i < allTrackers.length; ++i) {
            if (trackingID == allTrackers[i].get("trackingId")) {
                return allTrackers[i];
            }
        }
    } else {
        if (allTrackers.length > 0) {
            return allTrackers[0];
        }
    }
    return undefined;
};

const obtainUniversalAnalyticsTrackerPrefix = function() {
	let universalAnalyticsTracker = obtainTrackerFromTrackingID();
	return universalAnalyticsTracker ? universalAnalyticsTracker.get("name") + "." : "";
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.ga != null && window.ga.answer == 42 &&
        obtainTrackerFromTrackingID();
}, processUniversalAnalytics, 150);