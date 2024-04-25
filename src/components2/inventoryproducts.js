function InventoryProducts() {
  return (
    <>
      <section class="products">
        <div class="section-center clearfix">
          {/* <!-- products inventory --> */}
          <article
            class="products-inventory-all clearfix"
            id="products-inventory-all"
          >
            {/* <!-- single product 1 --> */}
            <div class="product product-all">
              <img
                src="./images/product-1.jpeg"
                alt="product 1"
                class="product-img"
              />
              <h4 class="ratings">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </h4>
              <h4 class="product-title">ginger peach tea</h4>
              <h4 class="product-price">Rs. 399</h4>
              <button class="btn product-btn p0">add to cart</button>
              <button class="btn product-btn">buy now</button>
            </div>
            {/* <!-- end of single product 1 --> */}
            {/* <!-- single product 2 --> */}
            <div class="product product-all">
              <img
                src="./images/product-2.jpeg"
                alt="product 2"
                class="product-img"
              />
              <h4 class="ratings">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </h4>
              <h4 class="product-title">fruit sangria</h4>
              <h4 class="product-price">Rs. 349</h4>
              <button class="btn product-btn" id="add-to-cart">
                add to cart
              </button>
              <button class="btn product-btn">buy now</button>
            </div>
            {/* <!-- end of single product 2 --> */}
            {/* <!-- single product 3 --> */}
            <div class="product product-all">
              <img
                src="./images/product-3.jpeg"
                alt="product 3"
                class="product-img"
              />
              <h4 class="ratings">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </h4>
              <h4 class="product-title">clear tea</h4>
              <h4 class="product-price">Rs. 499</h4>
              <button class="btn product-btn">add to cart</button>
              <button class="btn product-btn">buy now</button>
            </div>
            {/* <!-- end of single product 3 --> */}
          </article>
        </div>
      </section>
    </>
  );
}

export default InventoryProducts;
