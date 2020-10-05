# About this Project
The 'evaluate news nlp' project is there to help students understand build tools with the example of the javascript build tool 'webpack'.
## How to prepare the project
In order to get the project running, you have to do the actions in the sections below.
### Check out the project from github: 
The repository can be found at  [https://github.com/datacamp256/4_evaluate-news-nlp](https://github.com/datacamp256/4_evaluate-news-nlp). You can clone it for example using the gh command:

```bash
  gh repo clone datacamp256/4_evaluate-news-nlp
```
 
### Get a MeaningCloud API Key
Register at MeaningCloud (https://www.meaningcloud.com/developer/login) using a 'Free' plan and then get your API key from
[https://www.meaningcloud.com/developer/account/subscriptions](https://www.meaningcloud.com/developer/account/subscriptions).

### Set the API Key as environment variable
Create a file '.env' in the root directory of the project (next to this README.md file) and store the received API-Key as value behind _MEANINGCLOUD_API_KEY=_ 
```bash
  touch .env
  echo "MEANINGCLOUD_API_KEY=<your key>" > .env
```

### Install dependencies
 Once you have installed [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) you have to download the dependencies using
```bash
 npm install
```

## Run the Application
To get the application online you have to make the packages to be distributed and run them.
### For Production
If you want the application just to run smooth, first create the build packages for 'prod' and then start the application:
```bash
npm run build-prod
npm start
```

### As development instance
If you want to make changes to the application it is more convenient to have the 'dev' environment created and run:
```bash
npm run build-dev
npm start
```

#### Development with live changing application
As a shortcut you can have the application deployed right from the sources (more or less). Your benefit is that each code change is visible in the browser after saving your files. On the other hand you cannot see the prepared artifacts in your dist directory.
```bash
npm run run-dev
```

