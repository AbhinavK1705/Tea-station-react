import { useState, useEffect } from "react";

function ContactForm() {
  const [contactName, setContactName] = useState(null);
  const [contactEmail, setContactEmail] = useState(null);
  const [contactMessage, setContactMessage] = useState(null);

  useEffect(() => {
    setContactName(document.getElementById("contact-name"));
    setContactEmail(document.getElementById("contact-email"));
    setContactMessage(document.getElementById("contact-message"));
  }, []); // Run effect only once on component mount

  const submitForm = function () {
    if (contactName && contactEmail && contactMessage) {
      // Check if elements exist
      contactName.value = "";
      contactEmail.value = "";
      contactMessage.value = "";
      alert("Thank you for submitting :)");
    } else {
      console.error("Elements not yet available");
    }
  };
  return (
    <>
      <section class="contact">
        <div class="section-center clearfix">
          <article class="contact-info">
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-location-arrow"></i>
                </span>
                address
              </h4>
              <h4 class="contact-text">
                Beside Silver Jubilee Tower <br />
                VIT Vellore, TN 632014
              </h4>
            </div>
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                email
              </h4>
              <h4 class="contact-text">Teastation24@hotmail.com</h4>
            </div>
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-phone"></i>
                </span>
                telephone
              </h4>
              <h4 class="contact-text">0146-632-014</h4>
            </div>
          </article>
          <article class="contact-form">
            <h3>contact us</h3>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="name"
                  class="form-control"
                  name="name"
                  id="contact-name"
                />
                <input
                  type="email"
                  placeholder="email"
                  class="form-control"
                  name="email"
                  id="contact-email"
                />
                <textarea
                  type="message"
                  placeholder="message"
                  class="form-control"
                  rows="5"
                  id="contact-message"
                ></textarea>
              </div>
              <button type="button" class="submit-btn btn" onClick={submitForm}>
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
export default ContactForm;
