const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const modalFormsSelector = ["modal_profile", "modal_new-card"];

const cardsList = document.querySelector(".cards__list");
const profileSection = document.querySelector(".profile");
//profile buttons
const editButton = profileSection.querySelector(".profile__edit-button");
const addButton = profileSection.querySelector(".profile__add-button");
//Profile Elements
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

//profile modal
const profileModal = document.querySelector(".modal_profile");
const profileForm = document.querySelector(".modal__form-profile");

//profile Modal Buttons
const profileExitButton = document.querySelector(".modal__exit-editor");
const profileSubmitButton = profileForm.querySelector(".modal__button-profile");

// profile Modal Fields
const nameEditInput = profileModal.querySelector(".modal__input_type_title");
const descEditInput = profileModal.querySelector(
  ".modal__input_type_description"
);
//General Modal Selector
const Modals = document.querySelectorAll(".modal");

//New Card Modal
const newCardModal = document.querySelector(".modal_new-card");
const newCardForm = document.querySelector(".modal__new-card-form");

//New Card Buttons
const cardExitButton = document.querySelector(".modal__exit-new-card");
const cardSubmitButton = profileForm.querySelector(".modal__button-new-card");

//New Card Fields
const titleCardInput = newCardModal.querySelector(".modal__input_type_name");
const urlCardInput = newCardModal.querySelector(".modal__input_type_url");

//Preview modal
const previewModal = document.querySelector(".modal_preview");
const previewImage = previewModal.querySelector(".modal__preview-image");
const previewTitle = previewModal.querySelector(".modal__preview-title");
const previewExitButton = previewModal.querySelector(".modal__exit-preview");

const cardsTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function getCardData(cardData) {
  const cardElement = cardsTemplate.cloneNode(true);

  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
    toggleModal(previewModal);
  });

  cardImageElement.src = cardData.link;
  cardTitleElement.textContent = cardData.name;
  cardImageElement.alt = cardData.name;

  return cardElement;
}

// Functions

function resetForms(modal) {
  const form = modal.querySelector(".modal__form");
  //select error message
  const errorMessages = form.querySelectorAll(".modal__input_type_error");
  const inputs = Array.from(form.querySelectorAll(".modal__input"));
  //reset form
  form.reset();
  //clear error messages
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
  //Remove error class
  inputs.forEach((input) => {
    input.classList.remove("modal__input-invalid");
  });
}

function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = getCardData(cardData);

    cardsList.prepend(cardElement);
  });
}

function fillProfileInputs() {
  nameEditInput.value = profileTitle.textContent;
  descEditInput.value = profileDesc.textContent;
}

function setProfileData(e) {
  e.preventDefault();
  profileTitle.textContent = nameEditInput.value;
  profileDesc.textContent = descEditInput.value;
}

function toggleModal(modal) {
  modal.classList.toggle("modal_opened");
  if (
    modal.classList.contains("modal_profile") ||
    modal.classList.contains("modal_new-card")
  ) {
    resetForms(modal);
    fillProfileInputs();
  }
}

function addNewCard(e) {
  e.preventDefault();

  const title = titleCardInput.value.trim();
  const url = urlCardInput.value.trim();

  if (!title || !url) {
    alert("Name and URL Cannot be empty!");
    return;
  }

  const newCard = {
    name: title,
    link: url,
  };

  const cardElement = getCardData(newCard);

  cardsList["prepend"](cardElement);

  e.target.reset();

  toggleModal(newCardModal);
}

function toggleModalByOverlay(e, modal) {
  if (
    e.target.classList.contains("modal") &&
    !e.target.classList.contains("modal_preview")
  ) {
    toggleModal(e.target);
    resetForms(modal);
  } else if (e.target.classList.contains("modal")) {
    toggleModal(e.target);
  }
}

// Event Listners

editButton.addEventListener("click", function () {
  toggleModal(profileModal);
});
addButton.addEventListener("click", function () {
  toggleModal(newCardModal);
});

profileExitButton.addEventListener("click", function () {
  toggleModal(profileModal);
});
cardExitButton.addEventListener("click", function () {
  toggleModal(newCardModal);
});

profileForm.addEventListener("submit", (e) => {
  setProfileData(e);
  toggleModal(profileModal);
});

newCardForm.addEventListener("submit", addNewCard);

previewExitButton.addEventListener("click", function () {
  toggleModal(previewModal);
});

document.addEventListener("keydown", (event) => {
  const openedModal = document.querySelector(".modal_opened");
  if (event.key === "Escape") {
    if (!(openedModal === null)) {
      openedModal.classList.remove("modal_opened");
    }
  }
});

Modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    toggleModalByOverlay(e, modal);
  });
});

renderCards();
