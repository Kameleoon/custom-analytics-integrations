const siteCode = "XXXXXXXX"; // Here, replace by the sitecode of your project in Kameleoon
let isKameleoonScriptInjected = false;
analytics.subscribe("page_viewed", (event) => {
  if (
    !isKameleoonScriptInjected &&
    event.context &&
    event.context.document &&
    event.context.document.location &&
    event.context.document.location.href
  ) {
    if (event.context.document.location.href.indexOf("checkout") !== -1) {
      // Create a script element
      var script = document.createElement("script");

      // Set the type attribute
      script.type = "text/javascript";

      // Set the src attribute to the Kameleoon JavaScript URL
      script.src = "//" + siteCode + ".kameleoon.io/engine.js";

      // Set async attribute to true
      script.async = true;

      // Set fetchpriority attribute to high
      script.setAttribute("fetchpriority", "high");

      // Append the script element to the document's head or body
      document.head.appendChild(script); // You can also use document.body.appendChild(script);         
      isKameleoonScriptInjected = true;
    }
  }
});

// The Kameleoon Command Queue allows you to delay the command's execution until the Kameleoon engine finishes loading.
// Once loaded, the engine executes all the commands in the queue, in the order they were pushed.
window.kameleoonQueue = window.kameleoonQueue || [];

const goalID = "XXXXXX"; // Here, replace by the id of the transaction goal you created in Kameleoon
const eventName = "checkout_completed"; // Here, replace by the Shopify event name

analytics.subscribe(eventName, (event) => {
  kameleoonQueue.push([
    "Kameleoon.API.Goals.processConversion",
    goalID,
    event.data.checkout.totalPrice.amount,
  ]);

  // code to add custom data containing the "currency" value to breakdown your transaction results 
  // kameleoonQueue.push(['Kameleoon.API.Data.setCustomData', 'currency', event.data.checkout.totalPrice.currencyCode]);
});
