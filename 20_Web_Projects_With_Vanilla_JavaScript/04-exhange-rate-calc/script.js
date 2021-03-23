const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const rateElement = document.getElementById("rate");
const swapBtn = document.getElementById("swap");
let currenciesData = null;

// Request currency data from the API
refreshCurrenciesCache = () => {
  fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('currenciesData', JSON.stringify(data));
      currenciesData = data;
    });

  console.warn('data request externally!');
};

// Init currencies data
currenciesDataInit = () => {
  // if(localStorage.getItem('selectedCurrencies') !== null) {
  //   const selectedCurrencies = JSON.parse(localStorage.getItem('selectedCurrencies'));
  //   currencyEl_one.value = selectedCurrencies[0];
  //   currencyEl_two.value = selectedCurrencies[1];
  // }

  if (localStorage.getItem('currenciesData') !== null) {
    const currencyJsonData = localStorage.getItem('currenciesData');
    currenciesData = JSON.parse(currencyJsonData);
    // in case data be
    if (currenciesData.time_next_update_utc > new Date().getUTCDate()) {
      refreshCurrenciesCache();
      console.info('data was outdate - update requested!')
    }
  } else {
    refreshCurrenciesCache();
  }

  if (currenciesData !== null) {
    console.info('data init completed - ', currenciesData);
  } else {
    console.error("data init failed!")
  }
};

// Fetch exchange rate and update the dom
const calculate = () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  let rate = "";
  console.log(currency_one, currency_two)

  if (currenciesData.base_code === currency_one) {
    rate = currenciesData.rates[currency_two];
  } else {
    // convert from USD
    const baseRate = currenciesData.rates[currency_two];
    // from USD backwards
    const targetRate = 1 / currenciesData.rates[currency_one];
    // multiply reversed by usd rate
    rate = targetRate * baseRate;
  }

  localStorage.setItem('selectedCurrencies', `["${currency_one}", "${currency_two}"]`);

  rateElement.innerHTML = `
    1 ${currency_one} = ${(rate).toFixed(2)} ${currency_two}
  `;
  amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
};

const swapCurrencies = () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;

  calculate();
};

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swapBtn.addEventListener('click', swapCurrencies);

// Init
currenciesDataInit();
calculate();