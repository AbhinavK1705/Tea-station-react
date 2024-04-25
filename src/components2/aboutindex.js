function AboutIndex() {
  return (
    <>
      <section>
        <div class="section-center clearfix">
          <article class="about-img">
            <div class="about-picture-container">
              <img
                src={"./images/about-bcg.jpeg"}
                alt="tea kettle"
                class="about-picture"
              />
            </div>
          </article>
          <article class="about-info">
            <div class="section-title">
              <h3>about our</h3>
              <h2>tea station</h2>
            </div>
            <p class="about-text">Welcome to Our Tea Station</p>
            <p class="about-text">
              We're passionate about providing a delightful tea experience for
              our customers. Our tea station is more than just a place to brew a
              cup of tea—it's a sanctuary where tea enthusiasts can explore a
              world of flavors and aromas.
            </p>
            <a class="btn" href="/about">
              learn more
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
export default AboutIndex;
