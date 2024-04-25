import "../Styles/header.css";
import "../Styles/styles.css";
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
          <a class="btn banner-btn" href="/about.html">
            explore
          </a>
        </div>
      </header>
      <div class="content-divider"></div>
    </>
  );
}

export default Header;
