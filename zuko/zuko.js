//documentation https://docs.zuko.io/browser-js-api/Zuko.html https://www.zuko.io/guides

// Define the name of the current experiment or personalization
const name = experimentName ? experimentName : personalizationName;

// Define the id of the current experiment or personalization
const id = experimentID ? experimentID : personalizationID;

//you need to create new form into zuko https://app.zuko.io/forms/new and define the slug (form id)
//Or you can use the already created form https://app.zuko.io/dashboard
const slug = 'your slug, ex: b39161de1fbba086';

const processZuko = function() {
  Zuko
    .trackForm({
      slug: slug,
    })
    .setAttribute('KameleoonCampaignID', id)
    .setAttribute('KameleoonCampaignName', name)
    .setAttribute('KameleoonVariationID', variationID)
    .setAttribute('KameleoonVariationName', variationName)
    .trackEvent('Kameleoon Tracking')
};

Kameleoon.API.Core.runWhenConditionTrue(function() {
    return window.Zuko != null;
}, processZuko, 150);