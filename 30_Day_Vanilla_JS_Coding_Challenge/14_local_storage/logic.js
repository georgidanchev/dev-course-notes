// item input
const addItems = document.querySelector('.add-items')
// item display
const itemsList = document.querySelector('.plates')
// item storage
const items = JSON.parse(localStorage.getItem('items')) || []

//
function populateList(plates = [], _platesList) {
  const platesList = _platesList
  platesList.innerHTML = plates.map((plate, i) => `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" 
      ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `).join('')
}

function localSave(_items) {
  localStorage.setItem('items', JSON.stringify(_items))
  populateList(items, itemsList)
}

function addIten(e) {
  // Pervent default from behaviour.
  e.preventDefault()

  // Get the text inside the input form.
  const text = this.querySelector('[name=item]').value

  // Crete an object using the text.
  const item = {
    text,
    done: false,
  }

  // Clear the form the element.
  this.reset()

  // Push our object into the storage array.
  items.push(item)

  // Save items array to local storage and update
  // list to mirror changes in browser.
  localSave(items)
}

function toggleDone(e) {
  // Continue down only if target is an input.
  if (!e.target.matches('input')) return

  // Destructure dataset index into index.
  const [index] = e.target.dataset.index
  items[index].done = !items[index].done

  // Save items array to local storage and update
  // list to mirror changes in browser.
  localSave(items)
}


// Run on input field submission.
addItems.addEventListener('submit', addIten)

// Toggle checkbox logic
itemsList.addEventListener('click', toggleDone)

// At the end of inital start, populat the list.
populateList(items, itemsList)