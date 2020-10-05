

function getApiKeys() {const dotenv = require('dotenv');
    dotenv.config();
    let keys = {
            sites:
                [{
                    site: "MeaningCloud",
                    api_location:"https://api.meaningcloud.com/",
                    application_key: process.env.MEANINGCLOUD_API_KEY
                }],
        }
    ;
    return keys;
}

module.exports.getApiKeys = getApiKeys;