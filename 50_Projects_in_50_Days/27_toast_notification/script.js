const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = ["Message One", "Message Two", "Message Three", "Message Four"]
const types = ["info", "success", "error"]

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)]
}

const createNotification = (message = null, type = null) => {
  const notificationEl = document.createElement("div")

  notificationEl.classList.add("toast")

  notificationEl.classList.add(type ? type : getRandomType())

  notificationEl.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notificationEl)

  setTimeout(() => {
    notificationEl.remove()
  }, 2000)
}

button.addEventListener("click", () => createNotification())

setTimeout(() => {
  createNotification("Initial notification", types[1])
}, 500)

setTimeout(() => {
  createNotification("Test notification", types[2])
}, 3000)
