const currencyFormate = Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'INR',
}).format;

export { currencyFormate };
