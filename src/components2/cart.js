import { useState } from "react";

function Cart() {
  const [showCart, setshowCart] = useState(false); // Initial state: navbar hidden

  const navbarHandler = () => {
    setshowCart(!showCart); // Toggle navbar visibility on click
  };
  return (
    <>
      <span class="cart-btn" id="cart-btn" onClick={navbarHandler}>
        <i class="fas fa-cart-shopping">
          <p class="count" id="cart-quantity">
            0
          </p>
        </i>
      </span>
      <div id="cart" className={`cart ${showCart ? "showCart" : ""}`}>
        <div class="cart-header">
          <h3>Your cart</h3>
          <span class="cart-close" id="cart-close">
            <i class="fas fa-times" onClick={navbarHandler}></i>
          </span>
        </div>
        <div class="cart-body" id="cart-body">
          <hr />
          <div class="cart-item">
            <div class="cart-item-image-container">
              <img src="./images/product-1.jpg" alt="ginger peach tea" />
            </div>
            <div class="cart-item-data">
              <div class="item-name">
                <h4>Ginger peach tea</h4>
              </div>
              <div class="item-quantity-container">
                <div class="subtract-quantity">
                  <i class="fas fa-minus"></i>
                </div>
                <div class="display-quantity">
                  <input type="text" class="input-quantity" value="1" />
                </div>
                <div class="add-quantity">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div class="item-price">
                <p>Rs. 449</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="cart-footer">
          <div class="cart-total">
            <h3>Subtotal</h3>
            <p id="cart-subtotal">Rs. 449</p>
          </div>
          <div class="cart-footer-checkout">
            <button class="btn checkout-btn" onclick="checkout()">
              checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
