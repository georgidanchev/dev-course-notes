const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');
let dragStartIndex;

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

const listItems = [];

// Swap list items that are draggable
const swapItems = (fromIndex, toIndex) => {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check our list to our original non-randomized array
const checkOrder = () => {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();
    // Is the list item in the wrong spot?
    if(personName !== richestPeople[index]) {
      listItem.classList.remove('right');
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

function dragStart() {
  dragStartIndex = Number(this.closest('li').getAttribute('data-index'));
};

function dragEnter() {
  this.classList.add('over');
};

function dragLeave() {
  this.classList.remove('over');
};

function dragOver(e) {
  e.preventDefault();
};

function dragDrop() {
  const dragEndIndex = Number(this.getAttribute('data-index'));
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
};

const addEventListeners = () => {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
  });
};

// IIFE to create random list based on our list array
(() => {
  [...richestPeople]
  .map((a) => ({ value: a, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  .forEach((person, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="person-name">${person}</p>
      <i class="fas fa-grip-lines"></i>
    </div>
  `;
    listItems.push(listItem);
    draggable_list.appendChild(listItem);
  });
addEventListeners();
})();

check.addEventListener('click', checkOrder);
