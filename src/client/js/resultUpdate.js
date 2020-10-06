async function update(resultJson) {
    console.log(resultJson);
    const resultDiv = document.getElementById('results');
    resultDiv.style.display = 'none';
    resultDiv.appendChild(createResultFragment(resultJson));
    resultDiv.style.display = 'block';
}

function createResultFragment(resultJson) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(createTag( 'h2', 'Text summary'));
    const textProperties = document.createElement('ul');
    [{key: 'agreement', value: resultJson.agreement},
        {key: 'confidence', value: resultJson.confidence},
        {key: 'irony', value: resultJson.irony},
        {key: 'model', value: resultJson.model},
        {key: 'score tag', value: resultJson.score_tag}]
        .forEach(element => {
            const listElement = document.createElement('li');
            listElement.innerText = `${element.key}: ${element.value}`;
            textProperties.appendChild(listElement);
        });

    resultJson.sentenceList.forEach(element => {
    });
    //TODO continue here
    fragment.appendChild(textProperties);
    return fragment;
}

function createTag(elementType, elementContent) {
    let item = document.createElement(elementType);
    item.innerText = elementContent;
    return item;
}
export {update}
