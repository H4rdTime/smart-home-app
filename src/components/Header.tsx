"use client";
import Link from "next/link";
import { useState } from "react";
import { LuShoppingCart, LuUser } from "react-icons/lu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        Умный Дом
      </Link>
      <nav className="hidden md:flex items-center gap-4 sm:gap-6">
        <Link href="/catalog" className="hover:text-indigo-600">Каталог</Link>
        <Link href="/info" className="hover:text-indigo-600">Информация</Link>
        <Link href="/qa" className="hover:text-indigo-600">Q&A</Link>
        <Link href="/favorites" className="hover:text-indigo-600">Избранное</Link>
        <Link href="/cart" className="flex items-center hover:text-indigo-600">
          <LuShoppingCart size={28} />
        </Link>
        <Link href="/account" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition">
          <LuUser size={24} />
          <span className="hidden sm:inline">Личный кабинет</span>
        </Link>
      </nav>
      <div className="relative md:hidden">
        <button
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span className="text-2xl">⋮</span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10">
            <Link href="/catalog" className="block px-4 py-2 hover:bg-gray-100">Каталог</Link>
            <Link href="/info" className="block px-4 py-2 hover:bg-gray-100">Информация</Link>
            <Link href="/qa" className="block px-4 py-2 hover:bg-gray-100">Q&A</Link>
            <Link href="/favorites" className="block px-4 py-2 hover:bg-gray-100">Избранное</Link>
            <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Корзина</Link>
            <Link href="/account" className="block px-4 py-2 hover:bg-gray-100">Личный кабинет</Link>
          </div>
        )}
      </div>
    </header>
  );
} 