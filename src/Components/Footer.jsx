function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div>
          <h3>ElectroHub</h3>
          <p>Your destination for premium electronics and everyday essentials.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Shop</strong>
            <a href="/products">Products</a>
            <a href="/">Home</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ElectroHub. Designed for modern shoppers.</p>
      </div>
    </footer>
  );
}

export default Footer;
