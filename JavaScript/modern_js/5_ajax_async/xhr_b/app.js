/* eslint-disable func-names */

const customerDiv = document.getElementById('customer');
const customersDiv = document.getElementById('customers');
const getCustomerBtn = document.getElementById('button1');
const getCustomersBtn = document.getElementById('button2');

// Requesting a single item.
const loadCustomer = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const res = JSON.parse(this.responseText);

      // Populate the template.
      const output = `
        <ul>
          <li>ID: ${res.id}</li>
          <li>NAME: ${res.name}</li>
          <li>company: ${res.company}</li>
          <li>phone: ${res.phone}</li>
        </ul>
      `;

      // Inject template with response.
      customerDiv.innerHTML = output;
    }
  };

  // Send the request.
  xhr.send();
};

// Requesting a json array.
const loadCustomers = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const res = JSON.parse(this.responseText);

      let output = '';

      res.forEach((item) => {
        // Populate each with the template.
        output += `
        <ul>
          <li>ID: ${item.id}</li>
          <li>NAME: ${item.name}</li>
          <li>company: ${item.company}</li>
          <li>phone: ${item.phone}</li>
        </ul>
        `;
      });

      // Inject template with response.
      customersDiv.innerHTML = output;
    }
  };

  // Send the request.
  xhr.send();
};

getCustomersBtn.addEventListener('click', loadCustomers);
getCustomerBtn.addEventListener('click', loadCustomer);
