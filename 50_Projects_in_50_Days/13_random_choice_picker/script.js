const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ""

  tags.forEach((tag) => {
    const tagEl = document.createElement("span")
    tagEl.classList.add("tag")
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
}

const highLightTag = (tag) => {
  tag.classList.add("highlight")
}

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight")
}

const randomSelect = () => {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highLightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 150)
  }, 150)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highLightTag(randomTag)
    }, 100)
  }, times * 100)
}

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 100)
    randomSelect()
  }
})

tagsEl.innerHTML = ""
textarea.value = ""
textarea.focus()
