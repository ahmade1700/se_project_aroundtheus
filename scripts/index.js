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

const modal = document.querySelector(".modal");
const profileForm = document.querySelector(".modal__form");

const editButton = document.querySelector(".profile__edit-button");
const exitButton = document.querySelector(".modal__exit");

const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

const nameEditInput = modal.querySelector("#title");
const descEditInput = modal.querySelector("#description");

const submitButton = profileForm.querySelector(".modal__button");

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

function toggleModal() {
  modal.classList.toggle("modal_opened");
}

// Event Listners

editButton.addEventListener("click", function () {
  fillProfileInputs();
  toggleModal();
});

exitButton.addEventListener("click", toggleModal);

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  setProfileData();
  toggleModal();
});
