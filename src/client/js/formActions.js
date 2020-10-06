const DISABLED = 'disabled';

function toggleForm(textField, submitButton) {
    const textHasValue = textField.value || false;
    let buttonIsActive = !submitButton.getAttribute(DISABLED);

    if (textHasValue !== buttonIsActive) {
        toggleButton(submitButton, textHasValue);
    }
}

function toggleButton(submitButton, active) {
    if (active) {

        submitButton.removeAttribute(DISABLED);
    } else {
        submitButton.setAttribute(DISABLED, DISABLED)
    }
}

export {toggleForm}
