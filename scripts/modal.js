const modal = document.querySelector(".modal");
const profileForm = document.querySelector(".modal__form");

const editButton = document.querySelector(".profile__edit-button");
const exitButton = document.querySelector(".modal__exit");

const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

const nameEditInput = modal.querySelector("#title");
const descEditInput = modal.querySelector("#description");

const submitButton = profileForm.querySelector(".modal__button");

// Functions

function formFieldRefresh() {
  nameEditInput.value = profileName.textContent;
  descEditInput.value = profileDesc.textContent;
}

function formInputRefresh() {
  profileName.textContent = nameEditInput.value;
  profileDesc.textContent = descEditInput.value;
}

function modalVisiblityToggle() {
  if (modal.classList.contains("modal__opened")) {
    modal.classList.remove("modal__opened");
  } else {
    formFieldRefresh();
    modal.classList.add("modal__opened");
  }
}

// Event Listners

editButton.addEventListener("click", function () {
  modalVisiblityToggle();
});

exitButton.addEventListener("click", function () {
  modalVisiblityToggle();
});

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formInputRefresh();
  modalVisiblityToggle();
});
