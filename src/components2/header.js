import "../Styles/header.css";
import "../Styles/styles.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header class="header">
        <div class="banner">
          <h2>Over one hundred flavours of</h2>
          <h1>
            specially <br />
            crafted tea
          </h1>

          <Link to="/about" className="btn banner-btn">
            explore
          </Link>
        </div>
      </header>
      <div class="content-divider"></div>
    </>
  );
}

export default Header;
