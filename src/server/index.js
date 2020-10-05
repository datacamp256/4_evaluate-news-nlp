let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apiKeyLoader = require('./apiKeyLoader')
const meaningCloudClient = require('./meaningCloudClient')

const app = express()

const bodyParser = require('body-parser')
app.use(express.static('dist'))
app.use(bodyParser.text());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/meaningcloud/text/', async function (req, res) {
    let apiKey = apiKeyLoader.getApiKeys().sites.find(site => site.site === 'MeaningCloud').application_key;
  await  meaningCloudClient.sentimentAnalysis(apiKey,
        req.body,
        (result) => {
            res.send(result);
        });
})

