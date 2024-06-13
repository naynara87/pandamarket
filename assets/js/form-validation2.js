const inputList = form.querySelectorAll("input");

inputList.forEach((input) => {
  input.addEventListener("keyup", () => {
    checkInputs(input);
  });
  input.addEventListener("blur", () => {
    checkInputs(input);
  });
});

function checkInputs(input) {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // const ConfirmPasswordValue = ConfirmPassword.value.trim();
  // const nicknameValue = nickname.value.trim();

  const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (input === email) {
    if (emailValue === "") {
      setErrorFor(email, "아이디를 입력하세요.");
    } else if (!email.test(emailValue)) {
      setErrorFor(password, "8~16자 영문, 숫자를 사용하세요.");
    } else {
      setSuccessFor(email);
    }
  } else if (input === password) {
    if (passwordValue === "") {
      setErrorFor(password, "비밀번호를 입력하세요.");
    } else if (!email.test(passwordValue)) {
      setErrorFor(password, "8~16자 영문, 숫자를 사용하세요.");
    } else {
      setSuccessFor(password);
    }
  }
}

function setErrorFor(input, message) {
  const inputFormDiv = input.parentElement;
  errorDiv = document.createElement('div');
  errorDiv.classList.add('error-message');
  errorDiv.innerHTML = message;
  inputFormDiv.insertBefore(errorDiv, e.nextSibling);
}

function checkAllInputs() {
  if (!checkMail(form.mail.value)) {
    return false;
  } else if (!checkPassword(form.pass.value,
    form.pass2.value)) {
    return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkAllInputs();
});