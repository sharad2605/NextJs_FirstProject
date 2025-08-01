// app/products/[id]/page.js

export const revalidate = 60;

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <h2>Failed to load product details.</h2>;
  }

  const product = await res.json();

  return (
    <div style={{
      border: '2px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '2rem',
      maxWidth: '600px'
    }}>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          borderRadius: '6px'
        }}
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
    </div>
  );
}
