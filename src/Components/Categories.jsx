const categories = [
  { title: "Headphones", description: "High-fidelity sound for music, gaming, and calls." },
  { title: "Laptops", description: "Powerful performance for work, study, and streaming." },
  { title: "Smart Home", description: "Connected devices to upgrade every room." },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="section-heading">
        <span className="eyebrow">Top categories</span>
        <h2>Shop by category</h2>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categories;
