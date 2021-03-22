const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const removeAllBorders = () => {
  tabItems.forEach(item => item.classList.remove('tab-border'));
};

const removeAllShow = () => {
  tabContentItems.forEach(tab => tab.classList.remove('show'));
};

const selectItem = (e) => {
  removeAllBorders();
  removeAllShow();
  e.target.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${e.target.id}-content`);
  tabContentItem.classList.add('show');
};

tabItems.forEach(item => item.addEventListener('click', selectItem));
