  // Retrieve cart quantity from local storage or initialize it to 0
  let cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;

  // Retrieve cart element
  let cart = document.getElementById('cart');

  // Function to update cart quantity and save it to local storage
  function updateCart() {
    // Update cart display
    cart.innerHTML = cartQuantity;
    // Save cart quantity to local storage
    localStorage.setItem('cartQuantity', cartQuantity);
  }

  // Function to add item to cart
  function addToCart() {
    // Increment cart quantity
    cartQuantity++;
    // Update cart
    updateCart();
  }

  // Update cart display when page loads
  window.onload = updateCart;

