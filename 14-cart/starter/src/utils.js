export const getTotals = (cart) => {
  console.log(cart);
  let totalCart = 0;
  let totalCost = 0;

  for (let item of cart.values()) {
    totalCart += item.amount;
    totalCost += item.amount * item.price;
  }

  return { totalCart, totalCost };
};
