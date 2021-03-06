
//---- Make Business Card Update with Form

    // 1 - create a variable for all input fields

var allInputForms = document.querySelectorAll('input');

    // 4 - Match each input field with the corressponding business card display field

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
    } else if (selectedInput.classList.contains("given-name")) {
        return document.querySelector(".given-name-display");
    } else if (selectedInput.classList.contains("surname")) {
        return document.querySelector(".surname-display");
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

for (var i = 0; i < allInputForms.length; i++) {
    var input = allInputForms[i];

    input.addEventListener("keyup", displayInput);
}

//---Display image selection on click

var uploadButton = document.querySelector('.upload-button');

    function triggerClick() {
        var hiddenUploadButton = document.querySelector('.upload');

        hiddenUploadButton.click();
    }

uploadButton.addEventListener("click", triggerClick);



//---choose picture for thumbnail and display image (found this method on stack overflow and tweaked it)

function readURL(input) {
    if (input.files && input.files[0]) {

            //Create file reader object to read the image specified by the user
            var reader = new FileReader();

            //Trigger event once image is selected
            reader.onload = function (e) {

                //Remove default image from business card
                var defaultImage = $(".default-image");
                defaultImage.addClass("is-hidden");

                //Add selected image to business card and expand the height and width to fill the div
                var selectedImage = $(".selected-image");
                    selectedImage
                    .removeClass("is-hidden")
                    .attr('src', e.target.result)
                    .width("100%")
                    .height("100%");
            };

            //Read the contents of the image file and trigger the onload method
            reader.readAsDataURL(input.files[0]);
        }
    }

//-----Display alert if somebody clicks "create hcard"

    function submit() {
        alert("Sorry, this feature does not exist yet :)");
    }

    var submitButton = document.querySelector('.upload-hcard-button');
    submitButton.addEventListener("click", submit);

//-----Add comma to the end of suburb

function addComma() {
    if ($(this).val().split('').pop() !== ',') {
        $(this).val($(this).val() + ",");
        return;
    }
}

$(".suburb").one("keyup", addComma); //Calls function only once
