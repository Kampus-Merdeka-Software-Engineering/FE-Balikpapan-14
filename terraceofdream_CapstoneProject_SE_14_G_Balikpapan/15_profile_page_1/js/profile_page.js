const inputName = document.getElementById("#inputName");
const inputNis = document.getElementById("#inputNis");
const inputBrithDate = document.getElementById("#inputBirthdate");
const inputEmail = document.getElementById("#inputEmail");

function submitForm() {
  inputName.value = "inputNameValue";
  inputNis.value = "InputNisValue";
  inputBrithDate.value = "inputBirthDateValue";
  inputEmail.value = "inputEmailValue";
}

console.log(submitForm);
