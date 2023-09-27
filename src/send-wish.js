//Select elements
const wishContainer = document.querySelector(".wish-container");
const successMessage = document.querySelector(".title");
const wishForm = document.getElementById("wish-form");
const senderInput = document.getElementById("sender-name");
const wishMessage = document.getElementById("wish-message").value;

//emailjs variables
const emailTemplateID = "template_woj5bnw";
const publicKey = "86IJgs7athT9A2r1_";
const emailServiceID = "default_service";

//initialize emailjs
(function () {
   emailjs.init(publicKey);
})();

// funxtion to display success message
function displaySuccessMessage(sender) {
   wishForm.style.display = "none";
   wishContainer.style.height = "200px";
   successMessage.textContent = `Thank you for your wishes ${sender}!`;
}

//function to display error message
function displayErrorMessage() {
   alert(
      "Error. Wish failed to send. Please reload the page and try again."
   );
}

window.onload = function () {
   wishForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;

      // Set default sender name
      this.sender_name.value ||= "Someone";

      // send email
      emailjs.sendForm("default_service", emailTemplateID, this).then(
         function (response) {

            displaySuccessMessage(senderInput.value);
         },
         function (error) {
            displayErrorMessage();
         }
      );
   });
};
