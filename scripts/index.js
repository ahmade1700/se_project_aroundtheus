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

const cardsList = document.querySelector(".cards__list");

//profile buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
//Profile Elements
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

//profile modal
const profileModal = document.querySelector(".modal__profile");
const profileForm = document.querySelector(".modal__form-profile");

//profile Modal Buttons
const profileExitButton = document.querySelector(".modal__exit-editor");
const profileSubmitButton = profileForm.querySelector(".modal__button-profile");

// profile Modal Fields
const nameEditInput = profileModal.querySelector(".modal__input_type_title");
const descEditInput = profileModal.querySelector(
  ".modal__input_type_description"
);

//New Card Modal
const newCardModal = document.querySelector("modal__new-card");
const newCardForm = document.querySelector(".modal__new-card-form");

let cardsTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function getCardData(cardData) {
  const cardElement = cardsTemplate.cloneNode(true);

  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");

  cardImageElement.src = cardData.link;
  cardTitleElement.textContent = cardData.name;
  cardImageElement.alt = cardData.name;

  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardData(cardData);

  cardsList.prepend(cardElement);
});

// Functions

function fillProfileInputs() {
  nameEditInput.value = profileName.textContent;
  descEditInput.value = profileDesc.textContent;
}

function setProfileData() {
  profileName.textContent = nameEditInput.value;
  profileDesc.textContent = descEditInput.value;
}

function toggleProfileModal() {
  profileModal.classList.toggle("modal_opened");
}
function toggleProfileModal() {
  profileModal.classList.toggle("modal_opened");
}

// Event Listners

editButton.addEventListener("click", function () {
  fillProfileInputs();
  toggleProfileModal();
});

profileExitButton.addEventListener("click", toggleProfileModal);

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  setProfileData();
  toggleProfileModal();
});
