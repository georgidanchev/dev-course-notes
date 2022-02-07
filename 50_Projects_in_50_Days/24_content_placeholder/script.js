const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

const getData = () => {
  header.innerHTML = `      
    <img
      src="https://images.unsplash.com/photo-1638913660695-b490171d17c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3572&q=80"
      alt="">
  `

  title.innerHTML = `Lorem ipsum dolor sit amet`

  excerpt.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, earum."

  profile_img.innerHTML = `
    <img class="profile-img" src="https://randomuser.me/api/portraits/men/75.jpg" alt="">
  `

  name.innerHTML = "John Doe"

  date.innerHTML = "Oct 20, 2020"

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))

  animated_bg_texts.forEach((bg_text) => bg_text.classList.remove("animated-bg-text"))
}

setTimeout(getData, 2500)
