const inputClass = document.querySelectorAll("input[required]");
const validateText = document.querySelector(".validation");
const inputPass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm_pass");

inputClass.forEach((input) => {
  input.addEventListener("click", () => {
    input.classList.add("submitted");
    validatePass();
  });
});

function validatePass() {
  if (inputPass.value !== confirmPass.value) {
    validateText.classList.add("invalid");
    validateText.classList.remove("valid");
  } else {
    validateText.classList.add("valid");
    validateText.classList.remove("invalid");
  }
}
