const DISABLED = 'disabled';
const urlRegEx = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/gi;
// const urlRegEx = /a/gi; //toggle comment for debug
const regexMatcher = new RegExp(urlRegEx);
let urlWarningIsActive = false;


function analyzeForm(textField, submitButton) {
    const textHasValue = textField.value || false;
    let buttonIsActive = !submitButton.getAttribute(DISABLED);

    if (textHasValue !== buttonIsActive) {
        toggleButton(submitButton, textHasValue);
    }
    const contentIsAnUrl = textField.value.match(regexMatcher)!==null;
    if (contentIsAnUrl !== urlWarningIsActive) {
        urlWarningIsActive = Client.toggleUrlWarning(contentIsAnUrl);
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
