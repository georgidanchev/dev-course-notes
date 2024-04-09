const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export { currencyFormatter }
