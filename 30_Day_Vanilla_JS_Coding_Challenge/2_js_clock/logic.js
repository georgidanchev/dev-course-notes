const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // Get seconds from date object
  const seconds = now.getSeconds();
  // Convert seconds to degrees
  const secondsDegrees = ((seconds / 60) * 360);
  // Set the degree to the clock hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (((mins / 60) * 360) + 90);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = (((hour / 12) * 360) + 90);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// run this function every 1 second
setInterval(setDate, 1000);