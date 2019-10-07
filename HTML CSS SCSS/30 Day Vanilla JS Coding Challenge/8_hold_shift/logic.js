const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')
let lastChecked

function handleCheck(e) {
  let inBetween = false
  // If we are holding shift key and
  // we are checking a input box.
  if (e.shiftKey && this.checked) {
    // Loop over every checkbox

    checkboxes.forEach((chk) => {
      const checkbox = chk
      // Find all the boxes which are between the
      // selection by looping throught everything
      // when the currently selected checkbox or
      // the lastchecked match the inbetween var
      // will change it stante, giving us info.
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        console.log('Inbetween')
        inBetween = !inBetween
      }

      if (inBetween) {
        // If inbetween bool is true,
        // check each box in the loop.
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}

// Even listener for mouse/keyboard clicks.
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))