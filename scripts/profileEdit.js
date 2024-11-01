
// find the form in the DOM
const profileFormElement = // Use the querySelector() method

// find the form fields in the DOM
const nameInput = // Use querySelector()
const jobInput = // Use querySelector()

// find the profile elements in the DOM
const profileName = // Use querySelector()
const profileJob = // Use querySelector()

// the form submission handler. Note that its name 
// starts with a verb and concisely describes what it does
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
 
  profileName.value = nameInput.

  // insert new values into the textContent property of the 
  // corresponding profile elements
}

// connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleProfileFormSubmit);