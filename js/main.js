
// 1 - create a variable for each form field and business card display field

var allInputForms = document.querySelectorAll('input');
var givenName = document.querySelector('.given-name');
var surname = document.querySelector('.surname');
var emailAddress = document.querySelector('.email-address');
var emailAddressDisplay = document.querySelector('.email-address-display');


// 4 - Match each input form field with the corressponding business card display field

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


// 3 - display the form information on the business card

function displayInput() {

    // Save the changed input field in a variable
    var selectedInput = this;

    //Save the relevant display field for the business card in a variable
    var fieldToDisplay = findField(selectedInput);

    //Save the inputted information in a variable
    var displayOnCard = selectedInput.value;

    //Add the inputted information to the display field of the business card
    fieldToDisplay.innerHTML = displayOnCard;
}

// 2 - Loop through all the form fields and listen for a keyup on each one
allInputForms.forEach(input => {
    input.addEventListener('keyup', displayInput);
});
