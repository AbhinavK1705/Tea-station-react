import React, { useEffect } from "react";
import tea from "../data/tea"; // Ensure the path is correct

// Initialize tea quantities
tea.forEach((item) => {
  item.quantity = 0;
});

function Cart() {
  const cart = document.getElementById("cart");
  // Function to force a re-render in React
  const forceUpdate = React.useReducer(() => ({}), {})[1];

  // Toggles the visibility of the cart
  const toggleCartVisibility = () => {
    const cart = document.getElementById("cart");
    cart.classList.toggle("showCart");
  };

  // Updates the total quantity of items displayed in the cart icon
  const updateCartQuantity = () => {
    const cartQuantity = document.getElementById("cart-quantity");
    cartQuantity.innerHTML = tea.reduce(
      (acc, prod) => acc + prod.quantity,
      0
    );
  };
  // updateCartQuantity();

  // Renders all cart items based on their current quantities
  const showAllCartItems = () => {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "<hr/>";
    const itemsInCart = tea.filter((prod) => prod.quantity > 0);
    let sum = 0;

    if (itemsInCart.length === 0) {
      const html = `<p style="text-align:center; font-size:1rem; padding:0.5rem;">Your cart is empty<p/>`;
      cartBody.insertAdjacentHTML("beforeend", html);
    } else {
      itemsInCart.forEach((prod, i) => {
        const html = `<div class="cart-item">
          <div class="cart-item-image-container">
            <img src=${require(`../images/product-${i + 1}.jpg`)} alt="${
          prod.name
        }" />
          </div>
          <div class="cart-item-data">
            <div class="item-name"><h4>${prod.name}</h4></div>
            <div class="item-quantity-container">
              <div class="subtract-quantity" onclick="document.dispatchEvent(new CustomEvent('changeQuantity', { detail: { index: ${i}, increment: false } }))">
                <i class="fas fa-minus"></i>
              </div>
              <input type="text" class="input-quantity" value="${
                prod.quantity
              }" readonly />
              <div class="add-quantity" onclick="document.dispatchEvent(new CustomEvent('changeQuantity', { detail: { index: ${i}, increment: true } }))">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div class="item-price"><p>Rs. ${
              prod.price * prod.quantity
            }</p></div>
          </div>
          <hr />
        </div>`;
        cartBody.insertAdjacentHTML("beforeend", html);

        sum += prod.quantity * prod.price;
      });
    }
    const cartSubtotal = document.getElementById("cart-subtotal");
    cartSubtotal.textContent = `Rs. ${sum}`;
  };

  // Handle add and subtract quantity events from the cart
  useEffect(() => {
    const changeQuantityHandler = (event) => {
      const { index, increment } = event.detail;
      const item = tea[index];
      if (increment) {
        item.quantity++;
      } else {
        if (item.quantity > 0) item.quantity--;
      }
      updateCartQuantity();
      showAllCartItems();
      forceUpdate(); // This triggers React to re-render the component
    };

    document.addEventListener("changeQuantity", changeQuantityHandler);
    return () => {
      document.removeEventListener("changeQuantity", changeQuantityHandler);
    };
  }, []);
  const checkout = function () {
    alert("Thank you!");
    tea.map((prod) => (prod.quantity = 0));
    showAllCartItems(tea);
    updateCartQuantity();
    cart.classList.remove("showCart");
  };
  return (
    <>
      <span className="cart-btn" id="cart-btn" onClick={toggleCartVisibility}>
        <i className="fas fa-cart-shopping"></i>
        <p className="count" id="cart-quantity">
          0
        </p>
      </span>
      <div id="cart" className="cart">
        <div className="cart-header">
          <h3>Your cart</h3>
          <span className="cart-close" onClick={toggleCartVisibility}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="cart-body" id="cart-body"></div>
        <div className="cart-footer">
          <div className="cart-total">
            <h3>Subtotal</h3>
            <p id="cart-subtotal">Rs. 0</p>
          </div>
          <div className="cart-footer-checkout">
            <button className="btn checkout-btn" onClick={() => checkout()}>
              checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
