export default function VideoSection() {
  return (
    <section className="mt-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Как это работает</h2>
      <ol className="flex gap-6 mb-6 text-lg">
        <li>1 Установка</li>
        <li>→ 2 Подключение</li>
        <li>→ 3 Управление</li>
      </ol>
      <div className="w-full max-w-xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Здесь можно вставить видео или заглушку */}
        <button className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg hover:bg-indigo-700 transition">
          ▶
        </button>
      </div>
    </section>
  );
} 