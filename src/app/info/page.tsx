import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function InfoPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-white w-full shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Header />
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Информация о магазине</h1>
        <div className="bg-gray-50 rounded-2xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Контакты</h2>
          <p className="text-gray-700">г. Домодедово, ул. Текстильщиков, 2Г<br />Email: info@drivent.ru</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Гарантия</h2>
          <p className="text-gray-700">На все устройства предоставляется гарантия 12 месяцев.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Доставка</h2>
          <p className="text-gray-700">Доставка по всей России. Подробнее уточняйте у менеджера.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 