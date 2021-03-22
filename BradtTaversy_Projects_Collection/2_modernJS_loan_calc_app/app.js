const loanForm = document.getElementById('loan-form');

const clearError = () => {
  // Find the error object and remove it.
  document.querySelector('.alert').remove();
};

const showError = (err) => {
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card');
  // Create error object as a simple div.
  const errDiv = document.createElement('div');
  // Add styles to the error object.
  errDiv.className = 'alert alert-danger';
  // Add text node to the error object.
  errDiv.appendChild(document.createTextNode(err));
  // Insert error object before heading.
  card.insertBefore(errDiv, heading);
  // Clear error after 3 seconds.
  setTimeout(clearError, 3000);
};

// When you submit the form. This gets triggered with true.
// Once timeout is done. This gets triggered wit false.
const toggleCalcLoader = (bool) => {
  if (bool === true) {
    // Hide Results - Show Loading.
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
  } else {
    // Show Loading - Hide Results.
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }
};

// If we get error in the fields - this removes loader.
const hideCalcLoader = () => {
  document.getElementById('results').style.display = 'none';
};

const calcResults = () => {
  // UI vars.
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Loan figures.
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments.
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Finds whether a value is a legal finite number.
  if (isFinite(monthly)) {
    // Numbers are correct - do calculation.
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    // Show results.
    toggleCalcLoader(false);
  } else {
    // Error - numbers are wrong.
    hideCalcLoader();
    showError('Please check your numbers.');
  }
};

const loanCalEventHandle = (e) => {
  e.preventDefault();
  // Show loading screen.
  toggleCalcLoader(true);
  // After 1sec show result.
  setTimeout(calcResults, 1000);
};

loanForm.addEventListener('submit', loanCalEventHandle);
