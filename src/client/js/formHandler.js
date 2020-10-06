function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    fetch('http://localhost:8081/meaningcloud?text='+encodeURI(formText))
    .then(res => res.json())
    .then(function(res) {
        Client.update(res)
    });
}

module.exports.handleSubmit = handleSubmit;
