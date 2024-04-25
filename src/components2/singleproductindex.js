function Item() {
  return (
    <>
      <div class="product">
        <span class="cart-icon">
          <button class="add-to-cart" onclick="addQuantity(0)">
            <i class="fas fa-cart-plus fa-fw"></i>
          </button>
        </span>
        <img
          src="./images/product-1.jpeg"
          alt="product 1"
          class="product-img"
        />
        <h4 class="product-title">ginger peach tea</h4>
        <h4 class="product-price">Rs. 399</h4>
      </div>
    </>
  );
}
