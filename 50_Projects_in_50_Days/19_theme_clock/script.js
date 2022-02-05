const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggleEl = document.querySelector(".toggle")
const htmlEl = document.querySelector("html")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Map a range of numbers to another range of numbers
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

toggleEl.addEventListener("click", (e) => {
  e.preventDefault()
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark")
    toggleEl.innerText = "Dark Mode"
    toggleEl.setAttribute("title", "Toggle dark mode")
  } else {
    htmlEl.classList.add("dark")
    toggleEl.innerText = "Light Mode"
    toggleEl.setAttribute("title", "Toggle light mode")
  }
})

const setTime = () => {
  const time = new Date()

  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const ampm = hours >= 12 ? "PM" : "AM"

  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 1, 12, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setInterval(setTime, 1000)

setTime()
