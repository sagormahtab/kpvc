const formatMoney = (amount: number) =>
  new Intl.NumberFormat("en-US").format(amount);

export default formatMoney;
