/**
 * @file send-wish.js
 * @description This file handles the sending of wishes to my email using emailjs API and the emailjs-template service
 * @version 1.0.0
 * @since 26 Sept 2023
 * @requires emailjs
 * @requires emailjs-com
 */




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

//initialize emailjs API
(function () {
    emailjs.init(publicKey);
})();

/**
 * Function to handle wish sending success or failure
 * @param {string} sender - Sender's name
 * @param {boolean} messageSent - Whether message was sent successfully
 */
function emailStatusIndicator(sender, messageSent) {
    if (messageSent) {
        wishForm.style.display = "none";
        wishContainer.style.height = "200px";
        successMessage.textContent = `Thank you for your wishes ${sender}!`;
    } else {
        alert(
            `Error Error Error\n\nHello ${sender}, We failed to send your message.\nPlease reload the page or try again later.`
        );
    }
}

window.onload = function () {
    wishForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable. This used to distinguish between messages by emailjs.
        this.contact_number.value = (Math.random() * 100000) | 0;

        // Set default sender name
        this.sender_name.value ||= "Anonymous";

        // send email
        emailjs.sendForm(emailServiceID, emailTemplateID, this).then(
            function () {
                emailStatusIndicator(senderInput.value, true);
            },
            function () {
                emailStatusIndicator(senderInput.value, false);
            }
        );
    });
};
