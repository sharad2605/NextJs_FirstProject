// app/products/[id]/page.js

export default function ProductDetailsPage({ params }) {
  const { id } = params;

  return (
    <div style={{
      border: '2px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '2rem',
      maxWidth: '600px'
    }}>
      <h2>Product {id} details page — content coming soon!</h2>
    </div>
  );
}
