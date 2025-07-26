// app/products/page.js

import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is just a placeholder.</p>

      <ul>
        <li><Link href="/Products/1">Product 1</Link></li>
        <li><Link href="/Products/2">Product 2</Link></li>
        <li><Link href="/Products/3">Product 3</Link></li>
        <li><Link href="/Products/4">Product 4</Link></li>
        <li><Link href="/Products/5">Product 5</Link></li>
        <li><Link href="/Products/6">Product 6</Link></li>
        <li><Link href="/Products/7">Product 7</Link></li>
        <li><Link href="/Products/8">Product 8</Link></li>
        <li><Link href="/Products/9">Product 9</Link></li>
        <li><Link href="/Products/10">Product 10</Link></li>
      </ul>
    </div>
  );
}
