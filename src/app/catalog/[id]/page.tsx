// src/app/catalog/[id]/page.tsx
import Link from 'next/link';

export default async function ProductPage(props: {
  params: Promise<{ id: string }>
}) {
  // "раскрываем" promise и получаем { id }
  const { id } = await props.params;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/catalog" className="hover:underline">
          Каталог
        </Link>{' '}
        / <span>Товар {id}</span>
      </nav>
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Товар {id}</h1>
        {/* Здесь подробная информация о товаре */}
      </div>
    </main>
  );
}
