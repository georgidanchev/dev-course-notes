const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

const jokesApiConfig = {
  headers: {
    Accept: "application/json",
  },
}

// using .then
// const generateJoke = () => {
//   fetch("https://icanhazdadjoke.com", jokesApiConfig)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

// using async await
const generateJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com", jokesApiConfig)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener("click", generateJoke)

generateJoke()
