
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
  console.log("hello");

  if (selectedInput.classList.contains("email-address") === true) {
      return document.querySelector('.email-address-display');
  } else {
      return givenName;
  }
}


function displayInput() {
  var selectedInput = this;
  var displayOnCard = this.value;
  var fieldToDisplay = findField(selectedInput);
  fieldToDisplay.innerHTML =  displayOnCard;
}

allInputForms.forEach(input => {
  input.addEventListener('keyup', displayInput);
});
