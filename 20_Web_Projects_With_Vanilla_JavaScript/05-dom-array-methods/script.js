const addUserBtn = document.getElementById('add-user');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const doubleBtn = document.getElementById('double');
const main = document.getElementById('main');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');

const entries = 3;
let data = [];

// Format number as money
const formatMoney = (number) => {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// As it says on the thin
const updateDOM = (providedData = data) => {
  // Clear the main div
  main.innerHTML = `
    <h2><strong>Person</strong> Wealth</h2>
  `;

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `
      <strong>${item.name}</strong>
      ${formatMoney(item.money)}
    `
    main.appendChild(element);
  });
};

// Add new obj to data arr
const addData = (obj) => {
  data.push(obj);

  updateDOM();
};

// Fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  addData(newUser);
};

// Double every ones money
const doubleMoney = () => {
  data = data.map(user => {
    return {
      ...user,
      money: user.money * 2
    }
  });

  updateDOM();
};

// Sort entries by richest
const sortByRichest = () => {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
};

// Filter to show only millionaires
const showMillionairesOnly = () => {
  data = data.filter((user) => user.money >= 1000000 );

  updateDOM();
};

// Calculate total wealth for all entries
const calculateTotalWealth = () => {
  const totalWealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `
    <h3>Total wealth: <strong>${formatMoney(totalWealth)}</strong></h3>
  `;

  main.appendChild(wealthEl);
};

// Click Event listeners
addUserBtn.addEventListener('click', getRandomUser);
calculateWealthBtn.addEventListener('click', calculateTotalWealth);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionairesOnly);
sortBtn.addEventListener('click', sortByRichest);

// init the entries
for (let index = 0; index < entries; index++) {
  getRandomUser();
}
