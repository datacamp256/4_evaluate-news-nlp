async function update(resultJson) {
    console.log(resultJson);
    const fragment = await createResultFragment(resultJson)

    const resultDiv = document.getElementById('results');
    resultDiv.style.display = 'none';
    resultDiv.appendChild(createResultFragment(resultJson));
    resultDiv.style.display = 'block';
}

function createResultFragment(resultJson) {
    const fragment = document.createDocumentFragment();
    const textProperties = document.createElement('ul');
    const listElement = document.createElement('li');
    listElement.innerText = `agreement: ${resultJson.agreement}`;
    //TODO continue here
    textProperties.appendChild(listElement);
    fragment.appendChild(listElement);
    return fragment;
}

export {update}
