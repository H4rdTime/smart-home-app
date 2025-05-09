"use client";
import { useState } from "react";
import { LuStar, LuShoppingCart } from "react-icons/lu";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Умная камера",
    image: "/camera.png",
    available: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Датчик движения",
    image: "/camera.png",
    available: false,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Контроллер",
    image: "/camera.png",
    available: true,
    rating: 5.0,
  },
  // ...ещё товары
];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-white w-full shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Header />
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог</h1>
        <input
          type="text"
          placeholder="Поиск по товарам..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-8 w-full max-w-md px-4 py-2 border rounded-lg shadow-sm"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-gray-100 hover:shadow-md transition">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
              <div className="mb-2 text-lg font-semibold">
                <Link href={`/catalog/${product.id}`} className="hover:underline">{product.name}</Link>
              </div>
              <div className="mb-2">
                {product.available ? (
                  <span className="text-green-600 font-medium">В наличии</span>
                ) : (
                  <span className="text-red-500 font-medium">Нет в наличии</span>
                )}
              </div>
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map(i => (
                  <LuStar key={i} size={20} className={product.rating >= i ? "text-yellow-400" : "text-gray-300"} />
                ))}
                <span className="ml-2 text-gray-600">{product.rating}</span>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition"
                disabled={!product.available}
              >
                <LuShoppingCart size={20} />
                В корзину
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 