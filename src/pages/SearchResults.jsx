import React from 'react';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHH0hDNTTt5u3636KE5kOx5bdWxLvzJtYEQ&s',
    price: '1500 AZN',
    description: 'Latest Samsung Galaxy S23 with amazing features.',
  },
  {
    id: 2,
    name: 'Apple iPhone 15',
    image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review-1024x691.jpg',
    price: '2000 AZN',
    description: 'The newest Apple iPhone 15 with advanced technology.',
  },
  {
    id: 3,
    name: 'MacBook Air M1',
    image: 'https://btech.com/media/catalog/product/h/c/hc9hgmr_1.jpeg?width=800&store=en&image-type=image',
    price: '3399.99 AZN',
    description: '13" Retina Display - 512 GB',
  },
  {
    id: 4,
    name: 'Часы G-SHOCK',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKijmnA23O9ScX7ZPgJT0TPmNyKFoEBAxPSA&s',
    price: '299.99 AZN',
    description: 'Casio G-SHOCK',
  },
  {
    id: 5,
    name: 'HONOR Choice Earbuds',
    image: 'https://explorehonor.com/cdn/shop/files/HONORCHOICEEarbudsX5_White_4_1500x.jpg?v=1706877422',
    price: '49.99 AZN',
    description: 'Беспроводные Bluetooth наушники',
  },
];

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
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
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition mb-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;