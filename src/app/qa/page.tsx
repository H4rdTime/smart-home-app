import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QAPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-white w-full shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Header />
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Вопросы и ответы</h1>
        <div className="bg-gray-50 rounded-2xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Как заказать устройство?</h2>
          <p className="text-gray-700">Выберите нужный товар в каталоге и добавьте его в корзину. Затем оформите заказ через личный кабинет.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Какие способы оплаты доступны?</h2>
          <p className="text-gray-700">Доступны оплата картой, переводом и наличными при получении.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Как работает гарантия?</h2>
          <p className="text-gray-700">На все устройства предоставляется гарантия 12 месяцев. Подробнее — в разделе "Информация".</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 