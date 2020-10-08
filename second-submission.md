Hello Udacian,
thank you for your feedback.
Here are some notes how I changed my Project:

## Functionality
There are two notes in that chapter.
### The MeaningCloud API doesn't accept the request
>The app is NOT working as expected. Successful API requests are made to express server endpoints but the correct data is not returned by the API and hence no result is getting displayed on the page- I tried with different text input but all requests had the same response with a message msg: "Resource not supported: StarTrek" as shown in the screenshot.

Thank you for your detailed error description! Your remaining credits are 20000, so it seems you use a valid api key but not the one I sent you. Therefore you cannot use the small "StarTrek" dictionary I created in my MeaningCloud account (I was inspired by the "Welcome Captain" messages in the course and wanted to continue the theme).

I changed the dictionary to "general", which is available for every MeaningCloud account.

### Tests fail
Well, I presume a 'works on my machine' will not help ;-) (though it really should have worked...)

Actually, a some things have changed in that area - hopefully the tests are now green for you too!

## Code Reviews
Some small statemets 

### node-fetch in src/server/meaningCloudClient.js 
Thank you! That helped a lot!!

