class Cart{

    localStorageKey = undefined;

    cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) || [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  
    saveToStorage () {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }
  
    addToCart(productId, quantity) {
      //check matching items to add quantity
      let matchingItem;
      this.cartItems.forEach(cartItem => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId: '1'
        });
      }
      this.saveToStorage();
    }
  
    removeFromCart(productId){
      let newCart = [];
      this.cartItems.forEach(cartItem => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
    }
  
    cartQuantity() {
      //get the total quantity of products
      let cartQuantity = 0;
      this.cartItems.forEach(cartItem => {
        cartQuantity += cartItem.quantity;
      });
      return cartQuantity;
    }
  
    updateQuantity(productId, newQuantity){
      this.cartItems.forEach(cartItem => {
        if(cartItem.productId === productId){
          cartItem.quantity = newQuantity;
        }
      });
      this.saveToStorage();
    }
  
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingItem;
      this.cartItems.forEach(cartItem => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
      });
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }
  };
  
  const cart = new Cart();
  const businessCart = new Cart();

  cart.localStorageKey = 'cart-oop';
  businessCart.localStorageKey = 'cart-business';
  
  console.log(cart);
  console.log(businessCart);