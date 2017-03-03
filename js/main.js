console.log($);
console.log("yoyoyooyo");

const givenName = document.querySelector('.given-name');
const emailAddress = document.querySelector('.email-address');




function displayLetter() {
  let currentEmail = emailAddress.value;

  let emailAddressDisplay = document.querySelector('.email-address-display');

  emailAddressDisplay.innerHTML =  `${currentEmail}`;

};

givenName.addEventListener('keyup', displayLetter);
emailAddress.addEventListener('keyup', displayLetter);
