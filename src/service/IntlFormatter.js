export const formatePrice = (price) =>
  new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(price);
