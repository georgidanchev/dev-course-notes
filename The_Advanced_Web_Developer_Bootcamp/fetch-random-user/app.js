const submitBtn = document.getElementById("btn")
const url = "https://random-data-api.com/api/v2/users"
const templateTarget = document.querySelector("[data-template-target]")

const errorHandling = (request) => {
  // If request is okay return data, else error
  if (!request.ok) {
    throw Error(request.status)
  } else {
    return request
  }
}

const templateData = (data) => {
  // Hmmm what data do we have?
  console.log(data)

  // Lets destructure bits
  const { first_name: fName, last_name: lName, username, email, avatar, address } = data

  // Template straight, no updating bits individually
  templateTarget.innerHTML = `
    <img id="avatar" src="${avatar}" />
    <div id="fullname">${fName} ${lName}</div>
    <div id="username">
      ${username}
    </div>
    <div class="description">
      <div>Email: <span id="email">${email}</span></div>
      <div>City: <span id="city">${address.city}</span></div>
    </div>
  `

  // Enable submit button
  submitBtn.disabled = false
}

const fetchUserData = () => {
  fetch(url)
    .then(errorHandling)
    .then((res) => res.json())
    .then((res) => templateData(res))
    .catch((err) => {
      console.error(err)
      submitBtn.disabled = false
    })
}

submitBtn.addEventListener("click", () => {
  fetchUserData()
  submitBtn.disabled = true
})
