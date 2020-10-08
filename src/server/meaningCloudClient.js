const fetch = require('node-fetch');

async function sentimentAnalysis(apiKey, text, isUrl) {

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&${(isUrl ? 'url=' : 'txt=') + text}&model=general`;
    return fetch(url, {method: 'POST'}).then(res => res.json());
}

module.exports.sentimentAnalysis = sentimentAnalysis;