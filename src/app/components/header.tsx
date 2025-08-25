"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">QuizMaster</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/categories" className="hover:underline">Categories</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
