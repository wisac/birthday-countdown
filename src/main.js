
// Select elements
const wishBtn = document.querySelector(".wish-me-btn");
const progressCircle = document.querySelector(".inner-circle");
const mainTitle = document.querySelector(".title");
const dayTimer = document.querySelector(".day-hand");
const hourTimer = document.querySelector(".hrs-hand");
const minuteTimer = document.querySelector(".min-hand");
const secondTimer = document.querySelector(".sec-hand");
const quoteEl = document.querySelector(".message");
const birthdayEl = document.querySelector(".date");

let myMessage = "It's a great priviledge to be here, alive and healthy. I'm rejoicing in God's goodness. Happy birthday to me.";


let myBirthDay = [28, 9]; // day month
let isBirthday = false;


/**
 * Calculates the next birthday date based on the provided day and month.
 * If the birthday has already passed this year, it will return the next year's birthday date.
 * @param {number} day - The day of the month of the birthday.
 * @param {number} month - The month of the birthday.
 * @returns {{birthday: Date, startingDate: Date}} - An object containing the next birthday date and the starting date for the countdown.
 */
function getNextBirthday(day, month) {
   const today = new Date();
   const birthday = new Date(today.getFullYear(), month - 1, day);
   const startingDate = new Date(birthday);

   //set starting date to previous year and next day of birthday
   //This is for when birthday has not passed
   startingDate.setFullYear(startingDate.getFullYear() - 1);
   startingDate.setDate(startingDate.getDate() + 1);


   //if birthday has passed already, set next year's birthday
   // set next birthday to next year set starting date to next day of current year birthday 
   if (today > birthday) {
      birthday.setFullYear(birthday.getFullYear() + 1);
      startingDate.setFullYear(startingDate.getFullYear() + 1);
   }

   return {
      birthday: birthday, startingDate: startingDate
   };
}

// Get next birthday and starting date for countdown
const { birthday: endDate, startingDate: beginDate } = getNextBirthday(...myBirthDay);




// console.log(formatted)

// Set countdown timer
function startCountdown() {
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
      if (progressPercent < 0 || remainingTime <= 0) {
         pauseCountdown(timer);
         isBirthday = true;
         updateDate();

      }
   }, 1000);
}


function pauseCountdown(countdown) {
   clearInterval(countdown);
   mainTitle.textContent = "HAPPY BIRTHDAY TO ME!";
   dayTimer.textContent = "00";
   hourTimer.textContent = "00";
   minuteTimer.textContent = "00";
   secondTimer.textContent = "00";
   quoteEl.textContent = myMessage;
}

startCountdown();



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


/**
 * Updates the progress indicator circle with the progress percentage. 
 * @param {number} progressPercent - Progress percentage
 * @returns {void}
 */
function updateProgressCircle(progressPercent) {
   const totalAngle = 360;
   let angle = (progressPercent / 100) * totalAngle;

   progressCircle.style.backgroundImage = angle >= 0 ? `conic-gradient(
      var(--primary-light) ${angle}deg,
      var(--secondary) ${angle}deg` : `conic-gradient(
         var(--primary-light) ${totalAngle}deg,
         var(--secondary) ${totalAngle}deg`;
}


/**
 * Updates the quote element with a random quote from the `qoutes` array at a specified interval.
 * @function
 * @returns {void}
 */
function updateQoutes() {

   const duration = 4000;

 
   
   setInterval(() => {

      let currentQuote = isBirthday === true ? Math.floor(Math.random() * birthdayMessages.length) : Math.floor(Math.random() * qoutes.length);

      quoteEl.textContent = isBirthday === true ? birthdayMessages[currentQuote] : qoutes[currentQuote] ;

   }, duration);


}



/**
 * Updates the date element with the current date or the next birthday date.
 * @function
 * @returns {void}
 */
function updateDate() {
   const today = new Date();
   const options = {
      day: "numeric",
      weekday: "long",
      year: "numeric",
      month: "long"
   };

   //format date
   const todayBirthday = today.toLocaleDateString(undefined, options);
   const nextBirthDay = endDate.toLocaleDateString(undefined, options);

   birthdayEl.textContent = isBirthday ? todayBirthday : nextBirthDay;
}

updateQoutes();

updateDate();




// Handle wish button click
wishBtn.addEventListener("click", function (e) {
   e.preventDefault();
   window.location.href = "wish.html";
});
