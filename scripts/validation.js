function hasInvalidInput(formEl, options) {
  const { inputSelector } = options;
  const inputList = Array.from(formEl.querySelectorAll(inputSelector));
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(formEl, options) {
  const { submitButtonSelector } = options;
  const { inactiveButtonClass } = options;
  const saveButton = formEl.querySelector(submitButtonSelector);

  if (hasInvalidInput(formEl, options)) {
    saveButton.classList.add(inactiveButtonClass);
  } else {
    saveButton.classList.remove(inactiveButtonClass);
  }
}

function toggleErrorMessage(inputEl, options) {
  const { errorClass } = options;
  const { visibleErrorClass } = options;
  const errorMessage = inputEl.validationMessage;
  const errorElement = inputEl.parentElement.querySelector(
    `#${inputEl.id}-error`
  );

  if (!inputEl.validity.valid) {
    inputEl.classList.add(errorClass);
    errorElement.classList.add(visibleErrorClass);
    errorElement.textContent = errorMessage;
  } else {
    errorElement.textContent = "";
    inputEl.classList.remove(errorClass);
    errorElement.classList.remove(visibleErrorClass);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;

  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  toggleButtonState(formEl, options);

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      toggleErrorMessage(inputEl, options);
      toggleButtonState(formEl, options);
    });
  });
}

function enableValidation(options) {
  const { formSelector } = options;
  const formEls = [...document.querySelectorAll(formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault;
    });
    setEventListeners(formEl, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-invalid",
  visibleErrorClass: "modal__input_type_error-visible",
};

enableValidation(config);
