// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "12px"
    }}>
      <img
        src={product.image_url}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}