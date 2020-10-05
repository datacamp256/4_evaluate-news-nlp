import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'

// console.log(checkForName);
document.getElementById("submit").addEventListener("click", function(event) {
    handleSubmit(event);
});
export {
    checkForName,
    handleSubmit
}