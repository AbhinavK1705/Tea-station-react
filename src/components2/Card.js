import Product from "./prod";
import tea from "../data/tea.js";
import Cart from "./cart.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
export default function Card() {
  return (
    <>
      <Cart />
      <Navbar />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <section class="products">
        <div class="section-center clearfix">
          <article
            class="products-inventory-all clearfix"
            id="products-inventory-all"
          >
            <h2 style={{ padding: "15px" }}>inventory</h2> <br />
            <Product tea={tea[0]} id={1} />
            <Product tea={tea[1]} id={2} />
            <Product tea={tea[2]} id={3} />
            <Product tea={tea[3]} id={4} />
            <Product tea={tea[4]} id={5} />
            <Product tea={tea[5]} id={6} />
            <Product tea={tea[6]} id={7} />
            <Product tea={tea[7]} id={8} />
            <Product tea={tea[8]} id={9} />
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
