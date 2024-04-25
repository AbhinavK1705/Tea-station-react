import AboutIndex from "../components2/aboutindex";
import Cart from "../components2/cart";
import ContactForm from "../components2/contactindex";
import Footer from "../components2/footer";
import Header from "../components2/header";
import Navbar from "../components2/navbar";
import Bestsellers from "../components2/productsindex";
import OurServices from "../components2/servicesindex";
import SkillParent from "../components2/skillparent";

function Home() {
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
      <Header />
      <SkillParent />
      <AboutIndex />
      <Bestsellers />
      <OurServices />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Home;
