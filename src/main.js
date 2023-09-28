// Select elements
const wishBtn = document.querySelector(".wish-me-btn");
const progressCircle = document.querySelector(".inner-circle");
const mainTitle = document.querySelector(".title");
const dayTimer = document.querySelector(".day-hand");
const hourTimer = document.querySelector(".hrs-hand");
const minuteTimer = document.querySelector(".min-hand");
const secondTimer = document.querySelector(".sec-hand");

// Set start and end date
const currentYear = new Date().getFullYear();

function getNextBirthday(day, month) {
   const today = new Date();
   const birthday = new Date(today.getFullYear(), month - 1, day); // 10th October
   console.log("birtday real\n", birthday); // 2023 oct 10

   const startingDate = new Date(birthday); // 11th October


   startingDate.setFullYear(startingDate.getFullYear() - 1);
   startingDate.setDate(startingDate.getDate() + 1);

   console.log("STARTING WHEN NOT PASSED\n", startingDate); // 2022 oct 11
   console.log("\nBIRTHDAY WHEN NOT PASSED\n", birthday); // 2023 oct 10
   console.log("\nREM NOT PAASED\n", (birthday - startingDate) / 1000 / 60 / 60 / 24);


   //if birthday has passed already, set next year's birthday
   if (today > birthday) {
      birthday.setFullYear(birthday.getFullYear() + 1);
      startingDate.setFullYear(startingDate.getFullYear() + 1);
      console.log("\nSTARTING WHEN PASSED\n", startingDate); // 2023 oct 11
      console.log("\nBIRTHDAY WHEN PASSED\n", birthday);  // 2024 oct 10

      console.log("\nREM PAASED\n", (birthday - startingDate) / 1000 / 60 / 60 / 24);
   }

   return {
      birthday: birthday, startingDate: startingDate
   };
}



// const test = new Date(new Date().getFullYear(), 8, 30);
// const birthday = "sept 30";
// const lastDigit = parseInt(birthday.slice(-1)) + 1;
// const beginCountDay = `${birthday.slice(0, -1).concat(lastDigit)}`;
// console.log("begin", beginCountDay);

// const beginDate = new Date(`${beginCountDay}, ${currentYear} 00:00:00`);

const { birthday : endDate, startingDate : beginDate } = getNextBirthday(31,1);

console.log("begin", beginDate);
console.log("end", endDate);

// const endDate = new Date(`${birthday}, ${currentYear} 00:00:00`);


// Set countdown timer
let timer = setInterval(() => {

   const today = new Date();
   const remainingTime = endDate.getTime() - today.getTime();

   //format time
   const updateTimer = formatTime(remainingTime);

   // Update timer
   updateTimer(dayTimer, hourTimer, minuteTimer, secondTimer);

   // Update progress circle   
   let progressPercent = getProgressPercent(today);
   updateProgressCircle(progressPercent);

   // Stop countdown timer when time is up
   if (remainingTime <= 0) {
      mainTitle.textContent = "HAPPY BIRTHDAY TO ME!";
      clearInterval(timer);
   }
}, 1000);






/**
 * Formats the remaining time and displays it on the screen.
 * @param {number} milliseconds - Remaining time in milliseconds
 * @returns {function} - Function that updates the timer
 */
function formatTime(milliseconds) {
   const totalSeconds = parseInt(Math.floor(milliseconds / 1000));
   const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
   const totalHours = parseInt(Math.floor(totalMinutes / 60));
   let days = parseInt(Math.floor(totalHours / 24));

   let seconds = parseInt(totalSeconds % 60);
   let minutes = parseInt(totalMinutes % 60);
   let hours = parseInt(totalHours % 24);

   console.log(days + "d :" + hours + "h :" + minutes + "m :" + seconds + "s");



   return function (dayEl, hourEl, minEl, secEl) {

      //reset timer UI
      days > 0 ? days : (days = 0);
      hours > 0 ? hours : (hours = 0);
      minutes > 0 ? minutes : (minutes = 0);
      seconds > 0 ? seconds : (seconds = 0);

      // Update timer UI
      dayEl.textContent = days > 9 ? days : `0${days}`;
      hourEl.textContent = hours > 9 ? hours : `0${hours}`;
      minEl.textContent = minutes > 9 ? minutes : `0${minutes}`;
      secEl.textContent = seconds > 9 ? seconds : `0${seconds}`;
   };
}




/**
 * Calculates the percentage of time passed since the beginning of the countdown.
 * @param {Date} todayDate - Today's date
 * @returns {number} - Progress percentage
 */
function getProgressPercent(todayDate) {
   const todayTime = todayDate.getTime();
   const beginTime = beginDate.getTime();
   const endTime = endDate.getTime();

   const progressPercent = Math.floor(
      ((todayTime - beginTime) / (endTime - beginTime)) * 100
   );
   console.log(progressPercent, "%");
   return progressPercent;
}




// /**
//  * Function to update timer on UI
//  * @param {number} days - Days left
//  * @param {number} hours - Hours left
//  * @param {number} minutes - Minutes left
//  * @param {number} seconds - Seconds left
//  */
// function updateTimer(days, hours, minutes, seconds) {

//    //reset timer UI
//    days > 0 ? days : (days = 0);
//    hours > 0 ? hours : (hours = 0);
//    minutes > 0 ? minutes : (minutes = 0);
//    seconds > 0 ? seconds : (seconds = 0);

//    // Update timer UI
//    dayTimer.textContent = days > 9 ? days : `0${days}`;
//    hourTimer.textContent = hours > 9 ? hours : `0${hours}`;
//    minuteTimer.textContent = minutes > 9 ? minutes : `0${minutes}`;
//    secondTimer.textContent = seconds > 9 ? seconds : `0${seconds}`;
// }


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
