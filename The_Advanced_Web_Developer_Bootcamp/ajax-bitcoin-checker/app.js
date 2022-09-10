// Yeah no XHR here... Say hello to my big friend Fetch!

const priceTextBox = document.querySelector("#price")
const currencySymbol = document.querySelector("#currency")
const refreshBtn = document.querySelector("#button")

const templateData = (data) => {
  const { code, symbol, rate } = data.bpi.GBP
  priceTextBox.innerHTML = `${symbol}${rate} ${code}`
  refreshBtn.disabled = false
}

const dataLoader = (withTimeOut, data) => {
  if (withTimeOut) {
    setTimeout(() => {
      return templateData(data)
    }, 3000)
  } else {
    return templateData(data)
  }
}

const checkBitcoinPrice = (withTimeOut) => {
  priceTextBox.innerHTML = "Requesting data..."
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => dataLoader(withTimeOut, data))
    .catch((error) => console.error(error))
}

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault()

  refreshBtn.disabled = true;

  checkBitcoinPrice(true)
})

checkBitcoinPrice(false)
