function Staffabout() {
  return (
    <>
      <section class="services">
        <div class="about-staff">
          <h2>about us</h2>
        </div>
        <div class="section-center clearfix">
          {/* <!-- single card 1 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/reddy.jpg")}
                alt="service-img 1"
                class="service-img"
              />
            </div>
            <div class="service-info">
              <h3 style={{ fontSize: "1.5rem", marginTop: "-1rem" }}>
                Abhinav Reddy
              </h3>
              <h4>Chief Tea Connoisseur</h4>
              <p>
                Responsible for curating and selecting the finest tea blends
                from around the world, ensuring a delightful and authentic tea
                experience for our lovable customers
              </p>
            </div>
          </article>
          {/* <!-- end of single card 1 --> */}
          {/* <!-- single card 2 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/self.jpg")}
                alt="service-img 2"
                class="service-img"
              />
            </div>
            <div class="service-info">
              <h3 style={{ fontSize: "1.5rem", marginTop: "-1rem" }}>
                Kenguva Abhinav
              </h3>
              <h4>Head of Operations</h4>
              <p>
                Manages the day-to-day operations of Tea Station, overseeing
                logistics, inventory, and customer service to ensure smooth
                functioning and customer satisfaction
              </p>
            </div>
          </article>
          {/* <!-- end of single card 2 --> */}
          {/* <!-- single card 3 --> */}
          <article class="service-card">
            <div class="service-img-container">
              {/* <!-- image --> */}
              <img
                src={require("../images/poojitha.jpg")}
                alt="service-img 3"
                class="service-img"
              />
            </div>
            <div class="service-info">
              <h3 style={{ fontSize: "1.5rem", marginTop: "-1rem" }}>
                Poojitha Reddy
              </h3>
              <h4>Creative Director</h4>
              <p>
                Leads the creative vision of Tea Station, designing captivating
                visuals, marketing campaigns, and innovative tea experiences to
                engage and delight our audience
              </p>
            </div>
          </article>
          {/* <!-- end of single card 3 --> */}
        </div>
      </section>
    </>
  );
}
export default Staffabout;
