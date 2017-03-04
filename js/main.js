//create variable for each input field in the form

var givenName = document.querySelector('.given-name');
var surname = document.querySelector('.surname');
var emailAddress = document.querySelector('.email-address');

var allInputForms = document.querySelectorAll('input');

// function displayEmail() {
//   var currentEmail = emailAddress.value;
//   var emailAddressDisplay = document.querySelector('.email-address-display');
//   emailAddressDisplay.innerHTML =  currentEmail;
// }
//
// //Event listeners for any information put in form
//
// // givenName.addEventListener('keyup', displayName);
// emailAddress.addEventListener('keyup', displayEmail);

///Attempt all in one javascript

//Create if statements to verify which card field to append text

//return the field to display the information on the business card

function findField(selectedInput) {

    if (selectedInput.classList.contains("email-address")) {
        return document.querySelector('.email-address-display');
    } else if (selectedInput.classList.contains("phone")) {
        return document.querySelector(".phone-display");
    } else if (selectedInput.classList.contains("house-number")) {
        return document.querySelector(".house-number-display");
    } else if (selectedInput.classList.contains("street")) {
        return document.querySelector(".street-display");
    } else if (selectedInput.classList.contains("suburb")) {
        return document.querySelector(".suburb-display");
    } else if (selectedInput.classList.contains("state")) {
        return document.querySelector(".state-display");
    } else if (selectedInput.classList.contains("post-code")) {
        return document.querySelector(".post-code-display");
    } else if (selectedInput.classList.contains("country")) {
        return document.querySelector(".country-display");
    } else {
        return console.log("ERROR, not a field");
    }
}

function displayInput() {
    var selectedInput = this;
    var displayOnCard = this.value;
    var fieldToDisplay = findField(selectedInput);
    fieldToDisplay.innerHTML = displayOnCard;
}

allInputForms.forEach(input => {
    input.addEventListener('keyup', displayInput);
});
