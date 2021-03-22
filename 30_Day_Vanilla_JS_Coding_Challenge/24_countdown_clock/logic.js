// were we store our only timer.
let countdown

// Reference stuff on the page.
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function displayEndTime(timeStamp) {
  // exntansiate Date object and pass our timeStamp.
  const end = new Date(timeStamp)
  // Pull hour from timeStamp.
  const hour = end.getHours()
  // Recaluclate hour in 12hour format.
  const ampmHour = hour > 12 ? hour - 12 : hour
  // Pull minutes from timeStamp.
  const minutes = end.getMinutes()
  // Build timer subtitle for the return time.
  endTime.textContent = `Be back at ${ampmHour < 10 ? '0' : ''}${ampmHour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function displayTimeLeft(seconds) {
  // Get minutes but get lower round number to
  // avoid getting any floats of the left overs.
  const minutes = Math.floor(seconds / 60)
  const reminderSeconds = seconds % 60
  // Create string of time with template litreal
  // also, make sure number has 0 infront if the
  // seconds go under 10 wtih ternary operator.
  const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`
  // Update on page/screen timer.
  timerDisplay.textContent = display
  // Update tab title to reflect timer.
  document.title = `Timer: ${display}`
}

function timer(seconds = 3) {
  // If we have previous timer, clear it!
  clearInterval(countdown)
  // Get current time.
  const now = Date.now()
  // Get variable of when the timer will end.
  const then = now + seconds * 1000

  // At start display seconds left.
  displayTimeLeft(seconds)
  // Also display
  displayEndTime(then)

  // Intervnal timer  to update the
  // displayed the time on screen.
  countdown = setInterval(() => {
    // Calculate the seconds left.
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    // Check if we should stop the intervial.
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    // On every interval pass the seconds.
    displayTimeLeft(secondsLeft)
  }, 1000)
}

// This gets called by the buttons.
function startTimer() {
  // Set timer based on dataset.time
  const seconds = parseInt(this.dataset.time, 10)
  timer(seconds)
}

// Get timer buttons and set timer.
buttons.forEach(button => button.addEventListener('click', startTimer))

// Custom minutes input submit.
document.customForm.addEventListener('submit', (e) => {
  // Prevent default behavour. Since
  // we are not submiting anything.
  e.preventDefault()
  // Get the input value.
  const mins = e.target.minutes.value
  // Set the minutes and also multiply by 60
  // to convert the minutes into seconds.
  timer(mins * 60)
  // Clear the input from.
  e.target.reset()
})