import { toggleForm } from './js/formActions'
import { handleSubmit } from './js/formHandler'
import { update } from './js/resultUpdate'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'

// console.log(checkForName);
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", event => handleSubmit(event));
const textField = document.getElementById("name");
textField.addEventListener("input", event =>  toggleForm(textField, submitButton));
export {
    toggleForm,
    handleSubmit,
    update
}