import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [showNav, setShowNav] = useState(false); // Initial state: navbar hidden

  const navbarHandler = () => {
    setShowNav(!showNav); // Toggle navbar visibility on click
  };
  return (
    <>
      <span className="nav-btn" id="nav-btn" onClick={navbarHandler}>
        <i className="fas fa-bars"></i>
      </span>
      <nav id="navbar" className={`navbar ${showNav ? "showNav" : ""}`}>
        <div className="navbar-header">
          <span
            className={`nav-close ${showNav ? "showNav" : ""}`}
            id="nav-close"
            onClick={navbarHandler}
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              about
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              products
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
