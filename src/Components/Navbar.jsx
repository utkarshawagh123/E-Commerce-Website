const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">ElectroHub</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a href={item.path} key={item.path} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <a href="/products" className="button button-tertiary">
        Shop now
      </a>
    </header>
  );
}

export default Navbar;
