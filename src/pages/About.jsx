function About() {
  return (
    <main className="page-content page-about">
      <section className="about-hero">
        <span className="eyebrow">Our mission</span>
        <h2>Electronics made effortless.</h2>
        <p>
          ElectroHub was built to simplify premium shopping with a curated
          catalog, friendly service, and polished design.
        </p>
      </section>
      <div className="about-grid">
        <article>
          <h3>Trusted assortment</h3>
          <p>Every product is selected for quality, performance, and everyday value.</p>
        </article>
        <article>
          <h3>Easy returns</h3>
          <p>Fast support and simple returns keep your shopping experience smooth.</p>
        </article>
        <article>
          <h3>Fresh launches</h3>
          <p>New gadgets, accessories, and home tech arrive weekly.</p>
        </article>
      </div>
    </main>
  );
}

export default About;
