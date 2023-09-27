//Select elements
const wishForm = document.getElementById("wish-form");
const senderName = document.getElementById("sender-name").value;
const wishMessage = document.getElementById("wish-message").value;

const emailTemplateID = "template_woj5bnw";

(function () {
   emailjs.init("86IJgs7athT9A2r1_");
})();


window.onload = function() {
   wishForm.addEventListener('submit', function(event) {
      event.preventDefault();

       // generate a five digit number for the contact_number variable
       this.contact_number.value = Math.random() * 100000 | 0;
       
      // Set default sender name
      this.sender_name.value ||= "Someone";


       emailjs.sendForm('default_service', emailTemplateID , this)
          .then(function (response) {
             wishForm.style.display = "none";
               
           }, function(error) {
               console.log('FAILED...', error);
           });
   });
}

   


