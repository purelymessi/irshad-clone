import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-2 px-4 text-sm text-gray-600">
        <div className="flex space-x-4">
          <Link to="/promotions" className="hover:text-black">Kampaniyalar</Link>
          <Link to="/stores" className="hover:text-black">Mağazalar</Link>
          <Link to="/corporate" className="hover:text-black">Korporativ</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/compare" className="hover:text-black">Сравнение Samsung и Apple</Link>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <img src="https://irshad.az/images/svg-icons/logo.svg?v=7" alt="Irshad Logo" className="w-20" />
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2"
            >
              <span>Katalog</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg z-10">
                <Link to="/online-products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Только онлайн продукты</Link>
                <Link to="/phones-accessories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Телефоны и аксессуары</Link>
                <Link to="/large-appliances" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Крупная бытовая техника</Link>
                <Link to="/small-appliances" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Мелкая бытовая техника</Link>
                <Link to="/tv-audio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">ТВ и аудио</Link>
                <Link to="/photo-tech" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Фото техника</Link>
                <Link to="/laptops" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ноутбуки, планшеты и компьютерное оборудование</Link>
                <Link to="/outlet" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Аутлет</Link>
                <Link to="/home-goods" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Товары для дома</Link>
                <Link to="/furniture-textiles" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Мебель и текстиль</Link>
                <Link to="/transport-entertainment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Транспорт и Развлечение</Link>
                <Link to="/car-goods" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Товары для автомобиля</Link>
                <Link to="/sports-health" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Спорт и здоровье</Link>
                <Link to="/building-goods" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Строительные товары</Link>
                <Link to="/office-supplies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Канцелярские товары</Link>
                <Link to="/musical-equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Музыкальное оборудование</Link>
                <Link to="/personal-items" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Личные вещи</Link>
                <Link to="/jewelry" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ювелирные изделия</Link>
                <Link to="/monthly-payment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ежемесячный платеж</Link>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </form>

        <div className="flex items-center space-x-6">
          <Link to="/cart" className="hover:text-gray-600">Корзина</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
