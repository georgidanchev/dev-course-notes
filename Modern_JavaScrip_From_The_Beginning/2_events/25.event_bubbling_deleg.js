// EVENT BUBBLING

const cardTitle = document.querySelector('.card-title');
const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');
const col = document.querySelector('.col');

const eventfunc = () => {
  console.log('card title');
};

const eventfunc2 = () => {
  console.log('card content');
};

const eventfunc3 = () => {
  console.log('card');
};

const eventfunc4 = () => {
  console.log('col');
};

// cardTitle.addEventListener('click', eventfunc);
// cardContent.addEventListener('click', eventfunc2);
// card.addEventListener('click', eventfunc3);
// col.addEventListener('click', eventfunc4);

// Event Delagation/capturing

const deleteItem = (e) => {
  // console.log('delete item');
  if (e.target.parentNode.classList.contains('delete-item')) {
    e.target.parentNode.parentElement.remove();
    console.log('click');
  }
};

const delItem = document.querySelector('.delete-item');
document.body.addEventListener('click', deleteItem);
// delItem.addEventListener('click', deleteItem);
