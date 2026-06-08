const testimonials = [
  {
    name: "Maya Patel",
    role: "Lifestyle blogger",
    quote: "ElectroHub gave me fast delivery and amazing product selection. I love the smart speaker!",
  },
  {
    name: "Jordan Lee",
    role: "Freelance designer",
    quote: "The laptop range feels premium and the checkout experience is smooth and simple.",
  },
  {
    name: "Nina Khan",
    role: "Tech enthusiast",
    quote: "I purchased headphones for work calls and they sound incredible. The page design is gorgeous too!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span className="eyebrow">Customer love</span>
        <h2>What customers say</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p>“{item.quote}”</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
