import Aboutabout from "../components2/aboutabout";
import Cart from "../components2/cart";
import Footer from "../components2/footer";
import Navbar from "../components2/navbar";
import Staffabout from "../components2/staffabout";

function About() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Navbar />
      <Cart />
      <Aboutabout />
      <Staffabout />
      <Footer />
    </>
  );
}
export default About;
