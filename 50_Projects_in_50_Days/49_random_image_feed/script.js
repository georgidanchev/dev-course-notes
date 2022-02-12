const container = document.querySelector(".container")
const image_columns = 3
const image_row = 3

for (let i = 0; i < image_row * image_columns; i++) {
  const img = document.createElement("img")
  img.src = `https://source.unsplash.com/random/50${i}x50${i}`
  img.alt = `grid image ${i + 1}`
  container.appendChild(img)
}
