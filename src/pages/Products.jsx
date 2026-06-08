import ProductGrid from "../Components/ProductGrid";

function Products() {
  return (
    <main className="page-content page-products">
      <section className="section-heading">
        <span className="eyebrow">All products</span>
        <h2>Shop the full catalog</h2>
      </section>
      <ProductGrid />
    </main>
  );
}

export default Products;
