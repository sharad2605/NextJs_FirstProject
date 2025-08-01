// app/products/page.js
import Link from 'next/link';

export const revalidate = 60; // Revalidate data every 60 seconds

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products', {
    next: { revalidate: 60 }, // Enables caching with revalidation
  });
  const data = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <ul style={{ paddingLeft: '1rem' }}>
        {data.products.map(product => (
          <li key={product.id}>
            <Link href={`/Products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
