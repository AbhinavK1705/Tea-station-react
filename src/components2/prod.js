import React from "react";
import tea from "../data/tea"; // Make sure this import points to an array of objects

export default function Product(props) {
  // Updates the displayed cart quantity
  const updateCartQuantity = () => {
    const cartQuantity = document.getElementById("cart-quantity");
    cartQuantity.textContent = tea.reduce(
      (acc, prod) => acc + prod.quantity,
      0
    );
  };

  // Increases the quantity of the item at index x
  const addQuantity = (x) => {
    tea[x].quantity++;
    console.log(tea[x]);
    updateCartQuantity();
    showAllCartItems();
  };
  const toggleCartVisibility = () => {
    const cart = document.getElementById("cart");
    cart.classList.add("showCart");
  };
  const addQuantitywtoggle = (x) => {
    tea[x].quantity++;
    console.log(tea[x]);
    updateCartQuantity();
    toggleCartVisibility();
    showAllCartItems();
  };

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
  return (
    <div className="product product-all">
      <img
        src={require(`../images/product-${props.id}.jpg`)}
        alt={`product ${props.id}`}
        className="product-img"
      />
      <h4 className="ratings">
        {Array.from({ length: props.tea.ratings }, (_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
        {Array.from({ length: 5 - props.tea.ratings }, (_, i) => (
          <i key={i} className="far fa-star"></i>
        ))}
      </h4>
      <h4 className="product-title">{props.tea.name}</h4>
      <h4 className="product-price">Rs. {props.tea.price}</h4>
      <button
        className="btn product-btn"
        onClick={() => addQuantity(props.id - 1)} // Corrected to use an arrow function
      >
        add to cart
      </button>
      <button
        className="btn product-btn"
        onClick={() => addQuantitywtoggle(props.id - 1)}
      >
        buy now
      </button>
    </div>
  );
}

