import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductGrid from "./Components/ProductGrid";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductGrid />
                <Testimonials />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
