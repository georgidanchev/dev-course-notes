const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")
const API_URL = "https://api.github.com/users/"

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `
  main.innerHTML = cardHTML
}

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos")

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a")
    repoEl.classList.add("repo")
    repoEl.href = repo.html_url
    repoEl.target = "_blank"
    repoEl.innerText = repo.name
    reposEl.appendChild(repoEl)
  })
}

const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created")
    addReposToCard(data)
  } catch (err) {
    createErrorCard("Problem fetching repos")
  }
}

const createUserCard = (user) => {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
        </div>
      </div>
    </div>
    `

  main.innerHTML = cardHTML
}

const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username)
    console.log(data)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No user profile")
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)
    search.value = ""
  }
})

getUser("georgidanchev")
