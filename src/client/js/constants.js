const URL_REGEX =/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/gi;
const DISABLED = 'disabled';
const VISIBLE_ERROR = 'display: block;';
const INVISIBLE_ERROR = 'display: none;';

module.exports.URL_REGEX = URL_REGEX;
module.exports.DISABLED = DISABLED;
module.exports.VISIBLE_ERROR = VISIBLE_ERROR;
module.exports.INVISIBLE_ERROR = INVISIBLE_ERROR;
