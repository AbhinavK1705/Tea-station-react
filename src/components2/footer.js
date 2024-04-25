function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="section-center">
          <div class="social-icons">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <h4 class="footer-text">
            &copy;<span id="date"></span>
            <span class="company"> tea station</span>
            <span class="rights"> all rights reserved</span>
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
