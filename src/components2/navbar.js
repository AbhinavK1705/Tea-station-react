import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false); // Initial state: navbar hidden

  const navbarHandler = () => {
    setShowNav(!showNav); // Toggle navbar visibility on click
  };
  return (
    <>
      <span class="nav-btn" id="nav-btn" onClick={navbarHandler}>
        <i class="fas fa-bars"></i>
      </span>
      <nav id="navbar" className={`navbar ${showNav ? "showNav" : ""}`}>
        <div class="navbar-header">
          <span
            className={`nav-close ${showNav ? "showNav" : ""}`}
            id="nav-close"
          >
            <i class="fas fa-times" onClick={navbarHandler}></i>
          </span>
        </div>
        <ul class="nav-items">
          <li>
            <a class="nav-link" href="/">
              home
            </a>
          </li>
          <li>
            <a class="nav-link" href="/about">
              about
            </a>
          </li>
          <li>
            <a class="nav-link" href="/products">
              products
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
