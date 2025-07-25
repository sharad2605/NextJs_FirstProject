// app/products/page.js

import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is just a placeholder.</p>

      <ul>
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
        <li><Link href="/products/3">Product 3</Link></li>
        <li><Link href="/products/4">Product 4</Link></li>
        <li><Link href="/products/5">Product 5</Link></li>
        <li><Link href="/products/6">Product 6</Link></li>
        <li><Link href="/products/7">Product 7</Link></li>
        <li><Link href="/products/8">Product 8</Link></li>
        <li><Link href="/products/9">Product 9</Link></li>
        <li><Link href="/products/10">Product 10</Link></li>
      </ul>
    </div>
  );
}
