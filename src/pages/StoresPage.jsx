import React from 'react';

const StoresPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Наши магазины</h1>
      <p className="text-lg">Посетите любой из наших магазинов по всей стране:</p>
      
      <div className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Магазин 1 - Баку</h2>
        <p className="text-gray-600 mb-4">Адрес: ул. Главная, 123, Баку, Азербайджан.</p>
        <p className="text-gray-600 mb-4">Телефон: +994 12 123 4567</p>
      </div>

      <div className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Магазин 2 - Ленкорань</h2>
        <p className="text-gray-600 mb-4">Адрес: ул. Главная, 123, Ленкорань, Азербайджан.</p>
        <p className="text-gray-600 mb-4">Телефон: +994 12 123 4567</p>
      </div>

      <div className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Магазин 3 - Шемаха</h2>
        <p className="text-gray-600 mb-4">Адрес: ул. Главная, 123, Шемаха, Азербайджан.</p>
        <p className="text-gray-600 mb-4">Телефон: +994 12 123 4567</p>
      </div>

      <div className="mt-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Магазин 4 - Гянджа</h2>
        <p className="text-gray-600 mb-4">Адрес: ул. Главная, 123, Гянджа, Азербайджан.</p>
        <p className="text-gray-600 mb-4">Телефон: +994 12 123 4567</p>
      </div>
    </div>
  );
};

export default StoresPage;
