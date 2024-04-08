const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

export { currencyFormatter }
