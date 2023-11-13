'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import './ui/global.css'

export default function Page() {
  const [count, setCount] = useState(0);

  return (
<div className="bg-gray-100">
      <header className="bg-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold text-indigo-600">E-commerce Store</a>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-700 hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-600">Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-600">Cart</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="max-w-md mx-auto">
            <img src="product-image.jpg" alt="Product" className="w-full h-auto" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-semibold text-indigo-600">Product Name</h1>
            <p className="text-gray-600 mt-2">Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-indigo-600 text-2xl font-semibold mt-4">$99.99</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-700">Add to Cart</button>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2023 E-commerce Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
