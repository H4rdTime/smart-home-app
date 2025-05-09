import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold mb-3">Информация</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/info">О магазине</Link></li>
              <li><Link href="/info">Доставка и оплата</Link></li>
              <li><Link href="/info">Пользовательское соглашение</Link></li>
              <li><Link href="/info">Гарантия</Link></li>
              <li><Link href="/info">Производители</Link></li>
              <li><Link href="/info">Подарочные сертификаты</Link></li>
              <li><Link href="/info">Партнёры</Link></li>
              <li><Link href="/info">Товары со скидкой</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Служба поддержки</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/info">Связаться с нами</Link></li>
              <li><Link href="/info">Возврат товара</Link></li>
              <li><Link href="/info">Карта сайта</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Личный кабинет</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/account">Личный кабинет</Link></li>
              <li><Link href="/account">История заказов</Link></li>
              <li><Link href="/favorites">Мои закладки</Link></li>
              <li><Link href="/account">Рассылка новостей</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Контакты</div>
            <div className="text-gray-700 mb-2">
              <a href="mailto:info@drivent.ru" className="hover:underline">info@drivent.ru</a>
            </div>
            <div className="text-gray-700 mb-2">
              г. Домодедово, ул. Текстильщиков, 2Г
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://t.me/Drivent" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4 text-center text-gray-500 text-sm">
        © 2025 Умный Дом. Все права защищены.
      </div>
    </footer>
  );
} 