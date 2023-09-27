// Select elements
const wishBtn = document.querySelector(".wish-me-btn");
const progressCircle = document.querySelector(".inner-circle");
const dayTimer = document.querySelector(".day-hand");
const hourTimer = document.querySelector(".hrs-hand");
const minuteTimer = document.querySelector(".min-hand");
const secondTimer = document.querySelector(".sec-hand");

// Handle wish button click
wishBtn.addEventListener("click", function (e) {
   e.preventDefault();
   window.location.href = "wish.html";
});

