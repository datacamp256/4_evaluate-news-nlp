import { analyzeForm, textFieldContainsUrl} from './js/formActions'
import { handleSubmit } from './js/formHandler'
import { update, toggleUrl } from './js/resultUpdate'
import { URL_REGEX, DISABLED, VISIBLE_ERROR, INVISIBLE_ERROR} from './js/constants'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'

// console.log(checkForName);
const submitButton = document.getElementById("submit");
const textField = document.getElementById("name");
submitButton.addEventListener("click", event => handleSubmit(event, textFieldContainsUrl(textField)));
textField.addEventListener("input", () =>  analyzeForm(textField, submitButton));
export {
    analyzeForm,
    handleSubmit,
    update,
    toggleUrl,
    URL_REGEX,
    DISABLED,
    VISIBLE_ERROR,
    INVISIBLE_ERROR
}