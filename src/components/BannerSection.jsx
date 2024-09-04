
import React from 'react';

const BannerSection = ({ imageUrl, title, discount, oldPrice, newPrice, installments }) => {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 ml-6">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg font-semibold text-green-500 mb-1">{discount}</p>
          <p className="text-gray-600 mb-4">
            <s>{oldPrice}</s> <span className="text-black font-bold">{newPrice}</span>
          </p>
          <div className="flex space-x-4 mb-4">
            {installments.map((installment, index) => (
              <button key={index} className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
                {installment.months} мес. <br /> {installment.price} AZN
              </button>
            ))}
          </div>
          <button className="bg-green-500 text-white px-8 py-2 rounded-lg hover:bg-green-600 transition">В корзину</button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
