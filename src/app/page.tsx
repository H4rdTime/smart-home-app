"use client";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  // Моковые товары для каталога на главной
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
  ];
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header с фоном на всю ширину, элементы в контейнере */}
      <div className="bg-white w-full shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Header />
        </div>
      </div>
      {/* MainSlider с фоном на всю ширину, элементы в контейнере */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <MainSlider />
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-12">
        {/* Верхний блок: заголовок, кнопка, картинка */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Умные<br />устройства<br />для вашего<br />дома
            </h1>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition w-full sm:w-auto">
              Узнать больше
            </button>
          </div>
          <div className="flex-1 flex justify-center w-full mb-6 md:mb-0">
            <img
              src="/camera.png"
              alt="Камера"
              className="w-48 h-48 sm:w-72 sm:h-72 object-contain"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            />
          </div>
        </section>

        {/* Особенности */}
        <FeatureList />

        {/* Каталог */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Каталог</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-gray-100 hover:shadow-md transition">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
                <div className="mb-2 text-lg font-semibold">{product.name}</div>
                <div className="mb-2">
                  {product.available ? (
                    <span className="text-green-600 font-medium">В наличии</span>
                  ) : (
                    <span className="text-red-500 font-medium">Нет в наличии</span>
                  )}
                </div>
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={product.rating >= i ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition"
                  disabled={!product.available}
                >
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Как это работает */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Как это работает</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-2 sm:gap-4 text-lg mb-6">
              <span className="font-bold text-gray-900">1</span> <span>Установка</span>
              <span className="text-gray-400">→</span>
              <span className="font-bold text-gray-900">2</span> <span>Подключение</span>
              <span className="text-gray-400">→</span>
              <span className="font-bold text-gray-900">3</span> <span>Управление</span>
            </div>
            <div className="w-full max-w-2xl aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-2">
              <button className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-4xl shadow-lg hover:bg-indigo-700 transition">
                ▶
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
