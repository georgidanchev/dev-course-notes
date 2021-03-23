const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [{
    id: 1,
    text: 'Flower',
    amount: -20
  },
  {
    id: 2,
    text: 'Salary',
    amount: 300
  },
  {
    id: 3,
    text: 'Book',
    amount: -10
  },
  {
    id: 4,
    text: 'Camera',
    amount: 150
  }
];

const localStorageTransaction = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransaction : dummyTransactions;

function addTransaction(e) {
  e.preventDefault();

  if(text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: Number(amount.value)
    };

    // Add transaction to array
    transactions.push(transaction);

    // Add new transaction to dom
    addTransactionsDOM(transaction);

    // Update dom figures
    updateValues();

    // Save the new data
    updateLocalStorage();

    // reset form inputs
    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 1000000000);
}

// Add transactions to DOM list
function addTransactionsDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  // build transaction line
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  // Inject line into the dom
  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  // Create array of the amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculate the total
  const total = amounts.reduce((acc, item) => (acc + item), 0).toFixed(2);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = (amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1)
  .toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app via IIFE
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionsDOM);
  updateValues();
}

// Remove Transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

init();

// Transaction submission form
form.addEventListener('submit', addTransaction);
