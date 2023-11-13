'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import './ui/global.css'

export default function Page() {
  const [count, setCount] = useState(0);

  return (
<div className="bg-gray-100">
    <section className="bg-indigo-900 text-white p-20">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to E-commerce Store</h1>
            <p className="text-xl mb-6">Discover the latest trends in shopping.</p>
            <a href="#shop" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full text-lg">Shop Now</a>
        </div>
    </section>

    <div className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            </div>
        </div>
    </div>
    </div>
  );
}
