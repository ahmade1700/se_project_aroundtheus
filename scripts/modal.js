let modal = document.querySelector(".modal");

let editButton = document.querySelector(".profile__edit-button");
let exitButton = document.querySelector(".modal__exit");

function showModal() {
  modal.classList.add("modal__opened");
}

function hideModal() {
  modal.classList.remove("modal__opened");
}

editButton.addEventListener("click", function () {
  showModal();
});

exitButton.addEventListener("click", function () {
  hideModal();
});
