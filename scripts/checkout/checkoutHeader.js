import { cartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader(){
  const checkoutHTML =`
  Checkout (<a class="return-to-home-link js-checkout"
    href="amazon.html">${cartQuantity()} items</a>)`;
  document.querySelector('.js-checkout-header')
    .innerHTML = checkoutHTML;  
}