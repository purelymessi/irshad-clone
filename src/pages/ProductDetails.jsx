
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'HONOR Choice Earbuds',
    image: 'https://explorehonor.com/cdn/shop/files/HONORCHOICEEarbudsX5_White_4_1500x.jpg?v=1706877422',
    price: '49.99 AZN',
    description: 'Беспроводные Bluetooth наушники',
  },
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
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover mb-4 rounded-lg" 
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-green-600 mb-4">{product.price}</p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
