const express = require('express')
const apiKeyLoader = require('./apiKeyLoader')
const meaningCloudClient = require('./meaningCloudClient')

const app = express()

const bodyParser = require('body-parser')
app.use(express.static('dist'))
app.use(bodyParser.text());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/meaningcloud', async function (req, res) {
    let apiKey = apiKeyLoader.getApiKeys().sites.find(site => site.site === 'MeaningCloud').application_key;
  await  meaningCloudClient.sentimentAnalysis(apiKey,
      req.query.text,
        (result) => {
            res.send(result);
        });
})

