// HTML Elements
const endTime = document.getElementById('end-time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timerDisplay = document.getElementById('timer');

// Listen for user input on the end time input field
endTime.addEventListener('input', () => {
  startBtn.disabled = false;
});

// event listeners for countdown buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

// Global Variables
let countdownInterval;

function startTimer() {
  const endTimeValue = new Date(endTime.value);

  //check if the end time is valid
  if (isNaN(endTimeValue)) {
    alert('Please set a valid end time');
    return;
  }

  // Clear and existing countdown interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Enable the stop button and disable the start button when interval starts
  stopBtn.disabled = false;
  startBtn.disabled = true;

  // Start a new countdown interval
  countdownInterval = setInterval(() => {
    const now = Date.now();

    // Calculate the remaining time
    const remainingTime = endTimeValue - now;

    // If the temaining time is 0 or less, the countdown has finished
    if (remainingTime <= 0) {
      clearInterval(countdownInterval); // Stop the count
      timerDisplay.textContent = ''; // Clear the display
      alert('Countdown Finished!'); // Alert the user
    } else {
      // Display the remaining time
      timerDisplay.textContent = formatTime(remainingTime);
    }


  }, 1000);
}

function stopTimer() {
  clearInterval(countdownInterval); // Stop the timer counting down
  timerDisplay.textContent = ''; // Reset the display
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function formatTime(millisecond) {
  const totalSeconds = Math.floor(millisecond / 1000); // Convert milliseconds to total seconds
  const days = Math.floor(totalSeconds / 86400); // Convert total seconds to days
  const hours = Math.floor((totalSeconds % 86400) / 3600); // Convert total second to hours within a 24-hour range
  const minutes = Math.floor((totalSeconds % 3600) / 60); //Convert total seconds to minutes
  const seconds = totalSeconds % 60; // Convert total seconds to seconds

  // Return the days (if any), hours, minutes, and seconds as a string
  let daysString = '';
  if (days > 0) {
    daysString = days === 1 ? `${days} day, ` : `${days} days, `;
  }

  return `${daysString}${hours.toString().padStart(2, '0')} hours, ${minutes
    .toString().padStart(2, '0')} minutes & ${seconds.toString().padStart(2, '0')} seconds`;
}




