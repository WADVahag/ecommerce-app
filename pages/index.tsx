import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '../types';

const HomePage = ({ products }: { products: Product[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Список товаров</h1>
      <input
        type="text"
        placeholder="Поиск товаров"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full sm:w-96 p-4 bg-white border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-8"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-xl font-bold">{product.price} ₽</p>
            <Link href={`/product/${product.id}`} className="text-blue-500 mt-4 block">Подробнее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  // Простое кеширование на сервере с использованием локального кеша
  // Для более сложных решений можно использовать Redis или другие механизмы

  return { props: { products } };
}

export default HomePage;
