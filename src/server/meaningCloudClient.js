async function sentimentAnalysis(apiKey, text, callback) {
    let https = require('follow-redirects').https;

    let options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${apiKey}&lang=en&txt=${encodeURI(text)}&model=StarTrek`,
        'headers': {},
        'maxRedirects': 20
    };
    let req = https.request(options, function (res) {
        let chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            let body = Buffer.concat(chunks);
            callback(JSON.parse(body.toString()));
        });

        res.on("error", function (error) {
            console.error(error);
            callback(JSON.parse(error));
        });
    });

    req.end();
}

module.exports.sentimentAnalysis = sentimentAnalysis;