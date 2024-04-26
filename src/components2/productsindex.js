import tea from "../data/tea";

function Bestsellers() {
  // Updates the displayed cart quantity
  const updateCartQuantity = () => {
    const cartQuantity = document.getElementById("cart-quantity");
    cartQuantity.textContent = tea.reduce(
      (acc, prod) => acc + prod.quantity,
      0
    );
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
            <img src={require("./images/product-${i + 1}.jpg")} alt="${
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
  // Increases the quantity of the item at index x
  const addQuantity = (x) => {
    tea[x].quantity++;
    console.log(tea[x]);
    updateCartQuantity();
    showAllCartItems();
  };
  return (
    <>
      <section class="products">
        <div class="section-center clearfix">
          <article class="products-info">
            <div class="section-title">
              <h3>check out</h3>
              <h5>our bestsellers</h5>
            </div>
            <p class="product-text">
              Explore our bestsellers, curated for your satisfaction. These top
              picks promise an exceptional experience, loved by many. Indulge in
              our most popular offerings, crafted with care and quality.
            </p>
            <p class="product-text">Check out our inventory for more</p>
            <a class="btn" href="/products">
              inventory
            </a>
          </article>
          <article class="products-inventory clearfix">
            {/* <!-- single product 1 --> */}
            <div class="product">
              <span class="cart-icon">
                <button class="add-to-cart" onClick={() => addQuantity(0)}>
                  <i class="fas fa-cart-plus fa-fw"></i>
                </button>
              </span>
              <img
                src={require("../images/product-1.jpeg")}
                alt="product 1"
                class="product-img"
              />
              <h4 class="product-title">ginger peach tea</h4>
              <h4 class="product-price">Rs. 399</h4>
            </div>
            {/* <!-- end of single product 1 --> */}
            {/* <!-- single product 2 --> */}
            <div class="product">
              <span class="cart-icon">
                <button class="add-to-cart" onClick={() => addQuantity(1)}>
                  <i class="fas fa-cart-plus fa-fw"></i>
                </button>
              </span>
              <img
                src={require("../images/product-2.jpeg")}
                alt="product 2"
                class="product-img"
              />
              <h4 class="product-title">fruit sangria</h4>
              <h4 class="product-price">Rs. 349</h4>
            </div>
            {/* <!-- end of single product 2 --> */}
            {/* <!-- single product 3 --> */}
            <div class="product">
              <span class="cart-icon">
                <button class="add-to-cart" onClick={() => addQuantity(2)}>
                  <i class="fas fa-cart-plus fa-fw"></i>
                </button>
              </span>
              <img
                src={require("../images/product-3.jpeg")}
                alt="product 3"
                class="product-img"
              />
              <h4 class="product-title">clear tea</h4>
              <h4 class="product-price">Rs. 499</h4>
            </div>
            {/* <!-- end of single product 3 --> */}
          </article>
        </div>
      </section>
    </>
  );
}
export default Bestsellers;
