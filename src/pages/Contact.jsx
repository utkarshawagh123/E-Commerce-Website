function Contact() {
  return (
    <main className="page-content page-contact">
      <section className="section-heading">
        <span className="eyebrow">Get in touch</span>
        <h2>Have a question? We’re here to help.</h2>
      </section>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Customer support</h3>
          <p className="contact-email">
            <a href="mailto:utkarshawagh941@gmail.com">utkarshawagh941@gmail.com</a>
          </p>
          <p className="contact-phone">+91 9975896328</p>
        </div>
        <div className="contact-card">
          <h3>Visit us</h3>
          <address>
            <p>Angel Smruti, Papdy</p>
            <p>Vasai, Palghar</p>
          </address>
        </div>
      </div>
    </main>
  );
}

export default Contact;
