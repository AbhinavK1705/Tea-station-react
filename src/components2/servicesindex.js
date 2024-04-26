function OurServices() {
  return (
    <>
      <section class="services">
        <div class="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div class="section-center clearfix">
          {/* <!-- single card 1 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/product-1.jpeg")}
                alt="service-img 1"
                class="service-img"
              />
              {/* <!-- service-icon --> */}
              <span class="service-icon">
                <i class="fas fa-mortar-pestle fa-fw"></i>
              </span>
            </div>
            <div class="service-info">
              <h4>custom recipes</h4>
              <p>
                Elevate your culinary adventures with our bespoke recipes.
                Unleash your inner chef with our curated collection of delicious
                dishes
              </p>
            </div>
          </article>
          {/* <!-- end of single card 1 --> */}
          {/* <!-- single card 2 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/product-2.jpeg")}
                alt="service-img 2"
                class="service-img"
              />
              {/* <!-- service-icon --> */}
              <span class="service-icon">
                <i class="fas fa-home fa-fw"></i>
              </span>
            </div>
            <div class="service-info">
              <h4>home delivery</h4>
              <p>
                Convenience at your doorstep: enjoy our delights with
                hassle-free home delivery. Indulge in comfort and taste,
                delivered straight to you.
              </p>
            </div>
          </article>
          {/* <!-- end of single card 2 --> */}
          {/* <!-- single card 3 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/product-3.jpeg")}
                alt="service-img 3"
                class="service-img"
              />
              {/* <!-- service-icon --> */}
              <span class="service-icon">
                <i class="fas fa-mug-hot fa-fw"></i>
              </span>
            </div>
            <div class="service-info">
              <h4>tea aging</h4>
              <p>
                Delight in the alchemy of tea aging, where leaves transform into
                liquid poetry and each passing moment boosts the brew with a
                symphony of flavors
              </p>
            </div>
          </article>
          {/* <!-- end of single card 3 --> */}
        </div>
      </section>
    </>
  );
}
export default OurServices;
