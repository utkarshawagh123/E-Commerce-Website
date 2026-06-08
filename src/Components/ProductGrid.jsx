const products = [
  {
    image:
      "https://tse1.mm.bing.net/th/id/OIP.5vGZb4DKwZgj_rlz3_MuUgHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3",
    tag: "Best value",
    name: "Noise Cancelling Headphones",
    description: "Comfortable, immersive sound with a premium finish.",
    price: "$249",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    tag: "Hot",
    name: "Ultra Portable Laptop",
    description: "Thin, fast, and ideal for creators and students.",
    price: "$1,099",
  },
  {
    image:
      "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/12/Best-VR-Headsets-Of-2019-Featured-image.jpg",
    tag: "Gaming",
    name: "VR Gaming Set",
    description: "Immersive virtual reality gaming with motion controllers and crystal-clear visuals.",
    price: "$599",
  },
];

function ProductGrid() {
  return (
    <section className="product-grid-section">
      <div className="section-heading">
        <span className="eyebrow">Featured products</span>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
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
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
