const express = require('express');
const apiKeyLoader = require('./apiKeyLoader');
const meaningCloudClient = require('./meaningCloudClient');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
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
    const apiKey = apiKeyLoader.getApiKeys().sites.find(site => site.site === 'MeaningCloud').application_key;
    if (req.query.text) {
        res.send(await meaningCloudClient.sentimentAnalysis(apiKey, req.query.text, false));
    } else if (req.query.url) {
        res.send(await meaningCloudClient.sentimentAnalysis(apiKey, req.query.url, true));
    } else {
        res.status(400).send('Unknown requet parameter. Only "text" and "url" are allowed.');
    }
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server Error');
})