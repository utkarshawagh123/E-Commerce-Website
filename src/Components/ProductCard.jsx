function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-copy">
        <span className="product-tag">{product.tag}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-footer">
        <span className="product-price">{product.price}</span>
        <a href="/products" className="button button-outline">
          Add to cart
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
