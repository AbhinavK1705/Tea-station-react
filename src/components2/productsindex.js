function Bestsellers() {
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
            {/* <!-- end of single product 1 --> */}
            {/* <!-- single product 2 --> */}
            <div class="product">
              <span class="cart-icon">
                <button class="add-to-cart" onclick="addQuantity(1)">
                  <i class="fas fa-cart-plus fa-fw"></i>
                </button>
              </span>
              <img
                src="./images/product-2.jpeg"
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
                <button class="add-to-cart" onclick="addQuantity(2)">
                  <i class="fas fa-cart-plus fa-fw"></i>
                </button>
              </span>
              <img
                src="./images/product-3.jpeg"
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
