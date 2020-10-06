function updateResults(resultJson) {
    const resultDiv = document.getElementById('results');
    resultDiv.style.display = 'none';
    resultDiv.innerText = null;
    resultDiv.appendChild(createResultFragment(resultJson));
    resultDiv.style.display = 'block';
}
function updateFooter(remainingCredits) {
    const footer = document.getElementsByTagName('footer')[0];
    footer.style.display = 'none';
    footer.innerText = 'Remaining Credits: ' + remainingCredits;
    footer.style.display = 'block';
}
async function update(resultJson) {
    updateResults(resultJson);
    updateFooter(resultJson.status.remaining_credits)
}

function createSummary(fragment, resultJson) {
    fragment.appendChild(createTagWithText('h2', 'Text summary'));
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
    fragment.appendChild(textProperties);
}

function createSentenceTable(fragment, resultJson) {
    fragment.appendChild(createTagWithText('h2', 'Sentences'));
    const table = document.createElement('table');
    const row = document.createElement('tr');
    ['Sentence', 'Agreement', 'Confidence', 'Bop', 'Score Tag'].forEach(title => {
        row.appendChild(createTagWithText('th', title));
    });
    table.appendChild(row);
    resultJson.sentence_list.forEach(element => {
        const row = document.createElement('tr');
        [element.text, element.agreement, element.confidence, element.bop, element.score_tag].forEach(field =>{
            row.appendChild(createTagWithText('td', field));
        });
        table.appendChild(row);
    });
    fragment.appendChild(table);
}

function createResultFragment(resultJson) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(createTagWithText('h1','Status Report'));
    createSummary(fragment, resultJson);
    createSentenceTable(fragment, resultJson);
    return fragment;
}

function createTagWithText(elementType, elementContent) {
    const item = document.createElement(elementType);
    item.innerText = elementContent;
    return item;
}
export {update}
