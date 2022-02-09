const toggles = document.querySelectorAll(".toggle")
const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")

const doTheLogic = (clicked) => {
  if (good.checked && cheap.checked && fast.checked) {
    console.log("all")
    if (good == clicked) {
      fast.checked = false
    }
    if (cheap == clicked) {
      good.checked = false
    }
    if (fast == clicked) {
      cheap.checked = false
    }
  }
}

toggles.forEach((toggle) => toggle.addEventListener("change", (e) => doTheLogic(e.target)))
