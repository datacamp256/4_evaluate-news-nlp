const DISABLED = 'disabled';
const urlRegEx = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/gi;
const regexMatcher = new RegExp(urlRegEx);
let urlModeIsActive = false;


function analyzeForm(textField, submitButton) {
        const textHasValue = !!textField.value;
    let buttonIsActive = !submitButton.getAttribute(DISABLED);

    if (textHasValue !== buttonIsActive) {
        toggleButton(submitButton, textHasValue);
    }
    const contentIsAnUrl = textField.value.match(regexMatcher)!==null;
    if (contentIsAnUrl !== urlModeIsActive) {
        urlModeIsActive = Client.toggleUrl(contentIsAnUrl);
    }
}

function toggleButton(submitButton, active) {
    if (active) {
        submitButton.removeAttribute(DISABLED);
    } else {
        submitButton.setAttribute(DISABLED, DISABLED)
    }
}



module.exports.analyzeForm = analyzeForm
module.exports.urlModeIsActive = urlModeIsActive;