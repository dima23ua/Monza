
const form = document.forms.form;
const formInput = form.email;
const formInputPlaceholder = formInput.placeholder;


// click on input, placeholder -
formInput.addEventListener("focus", function (e) {
	formInput.placeholder = "";
});
// click on body, placeholder +
formInput.addEventListener("blur", function (e) {
	formInput.placeholder = formInputPlaceholder;
});

// submit button
form.addEventListener("submit", function (event) {	
	if (emailTest(formInput)) {
		formInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="form__error">Incorect Email</div>`
		);
		event.preventDefault();
	}
});

formInput.addEventListener("focus", function (event) {
	if (formInput.nextElementSibling) {
		formInput.nextElementSibling.remove();
	}
});

function emailTest(input) {
	return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
}
