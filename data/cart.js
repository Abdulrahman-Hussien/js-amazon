export const cart = [];

export function addToCart(productId, quantity) {
  //check matching items to add quantity
  let matchingItem;
  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}
