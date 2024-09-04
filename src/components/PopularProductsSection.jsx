
import React from 'react';
import ProductCard from './ProductCard.jsx';

const PopularProductsSection = ({ products, addToCart }) => {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg shadow-lg gap-3">
      <h3 className="text-xl font-semibold mb-4">Популярные товары</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default PopularProductsSection;
