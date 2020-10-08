let urlModeIsActive = false;

function textFieldContainsUrl(textField) {
    return textField.value.match(new RegExp(Client.URL_REGEX)) !== null;
}

function analyzeForm(textField, submitButton) {
        const textHasValue = !!textField.value;
    let buttonIsActive = !submitButton.getAttribute(Client.DISABLED);

    if (textHasValue !== buttonIsActive) {
        toggleButton(submitButton, textHasValue);
    }
    const contentIsAnUrl = textFieldContainsUrl(textField);
    if (contentIsAnUrl !== urlModeIsActive) {
        urlModeIsActive = Client.toggleUrl(contentIsAnUrl);
    }
}

function toggleButton(submitButton, active) {
    if (active) {
        submitButton.removeAttribute(Client.DISABLED);
    } else {
        submitButton.setAttribute(Client.DISABLED, Client.DISABLED)
    }
}



module.exports.analyzeForm = analyzeForm
module.exports.textFieldContainsUrl = textFieldContainsUrl;