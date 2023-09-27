// Select elements
const wishBtn = document.querySelector(".wish-me-btn");
const progressCircle = document.querySelector(".inner-circle");
const dayTimer = document.querySelector(".day-hand");
const hourTimer = document.querySelector(".hrs-hand");
const minuteTimer = document.querySelector(".min-hand");
const secondTimer = document.querySelector(".sec-hand");

// Set start and end date
const startDate = new Date("sept 27, 2023 10:00:00 AM");
const endDate = new Date("sept 27, 2023 11:20:00 AM");

// Time conversions
const milToDay = 4 * 60 * 60 * 1000;
const milToHrs = 60 * 60 * 1000;
const milToMin = 60 * 1000;
const milToSec = 1000;

// Set countdown timer
let timer = setInterval(() => {
   let todayDate = new Date();
   let timeLeft = endDate.getTime() - todayDate.getTime();
   let daysLeft = Math.floor(timeLeft / milToDay);
   let hoursLeft = Math.floor((timeLeft % milToDay) / milToHrs);
   let minutesLeft = Math.floor((timeLeft % milToHrs) / milToMin);
   let secondsLeft = Math.floor((timeLeft % milToMin) / milToSec);

   console.log("dif", timeLeft);
   console.log(
      daysLeft + ":" + hoursLeft + ":" + minutesLeft + ":" + secondsLeft
   );

   // Update timer
   updateTimer(daysLeft, hoursLeft, minutesLeft, secondsLeft);

   //   
   let progress = todayDate - startDate;
   let progressPercent = Math.floor((progress / (endDate - startDate)) * 100);
   console.log(progressPercent, "%");
   updateProgressCircle(progressPercent);

   console.log(timeLeft, "milli");
   // Stop countdown timer when time is up
   if (timeLeft <= 0) clearInterval(timer);
}, 1000);



/**
 * Function to update timer UI
 * @param {number} days - Days left
 * @param {number} hours - Hours left
 * @param {number} minutes - Minutes left
 * @param {number} seconds - Seconds left
 */
function updateTimer(days, hours, minutes, seconds) {

   //reset timer UI
   days > 0 ? days : (days = 0);
   hours > 0 ? hours : (hours = 0);
   minutes > 0 ? minutes : (minutes = 0);
   seconds > 0 ? seconds : (seconds = 0);

   // Update timer UI
   dayTimer.textContent = days > 9 ? days : `0${days}`;
   hourTimer.textContent = hours > 9 ? hours : `0${hours}`;
   minuteTimer.textContent = minutes > 9 ? minutes : `0${minutes}`;
   secondTimer.textContent = seconds > 9 ? seconds : `0${seconds}`;
}


/**
 * Function to update progress circle
 * @param {number} progressPercent - Progress percentage
 */
function updateProgressCircle(progressPercent) {
   const totalAngle = 360;
   let angle = (progressPercent / 100) * totalAngle;
   progressCircle.style.backgroundImage = `conic-gradient(
      var(--primary-light) ${angle}deg,
      var(--secondary) ${angle}deg`;

}


// Handle wish button click
wishBtn.addEventListener("click", function (e) {
   e.preventDefault();
   window.location.href = "wish.html";
});
