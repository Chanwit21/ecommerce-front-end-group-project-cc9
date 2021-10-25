export const formatePrice = (price) =>
  new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', currencyDisplay: 'narrowSymbol' }).format(price);
