
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.jsx';

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23',
    image: 'samsung-image-url',
    price: '1500 AZN',
    description: 'Latest Samsung Galaxy S23 with amazing features.',
  },
  {
    id: 2,
    name: 'Apple iPhone 15',
    image: 'iphone-image-url',
    price: '2000 AZN',
    description: 'The newest Apple iPhone 15 with advanced technology.',
  },
];

const Catalog = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                Add to Cart
              </button>
              <Link 
                to={`/product/${product.id}`} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;