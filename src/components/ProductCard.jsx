
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-bold text-green-600 mb-4">{product.price}</p>
        <button 
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition mb-2"
        >
          В корзину
        </button>
        <Link 
          to={`/product/${product.id}`} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProductCard
