// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentId ? experimentId : personalizationId;

const processHotjar = function () {
    let tag_name = `${id}-${name}-${variationID}-${variationName}`;
    tag_name = tag_name.replaceAll(" ", "").substring(0, 250);
    
    window.hj('event', tag_name);

    // if you don’t use Hotjar’s session recording feature, you can remove the line
    window.hj('tagRecording', [tag_name]);
};

Kameleoon.API.Core.runWhenConditionTrue(function () {
    return window.hj != null;
}, processHotjar, 150);