function handleSubmit(event, contentIsUrl) {
    event.preventDefault()

    // check what text was put into the form field
    let formValue = document.getElementById('name').value
    toggleErrorLabel(false);
    fetch(`http://localhost:8081/meaningcloud?${contentIsUrl?'url':'text'}=${encodeURI(formValue)}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Failed to connect to server with ${res.status}`);
            }
        })
        .then(function (res) {
            Client.update(res)
        })
        .catch(error => {
            console.log(error);
            toggleErrorLabel(true);
        });
}

function toggleErrorLabel(setVisible) {
    const errorLabel = document.getElementById('connection-error');
    const errorIsVisible = errorLabel.getAttribute('style') === Client.VISIBLE_ERROR;
    if (setVisible !== errorIsVisible) {
        errorLabel.setAttribute('style',setVisible ? Client.VISIBLE_ERROR : Client.INVISIBLE_ERROR);
    }
}
module.exports.handleSubmit = handleSubmit;
