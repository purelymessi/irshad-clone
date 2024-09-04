import React from 'react';

const promotionsData = [
  {
    id: 1,
    title: "Скидка на Samsung Galaxy S23",
    description: "Сэкономьте 20% на последней модели Samsung Galaxy S23. Предложение действительно ограниченное время.",
    originalPrice: "1299 AZN",
    discountPrice: "1040 AZN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHH0hDNTTt5u3636KE5kOx5bdWxLvzJtYEQ&s",
  },
  {
    id: 2,
    title: "Распродажа Apple MacBook Air",
    description: "Скидка до 15% на все модели MacBook Air. Отлично подходит для студентов и профессионалов.",
    originalPrice: "2199 AZN",
    discountPrice: "1869 AZN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95SAb6py9dydN3tEKKrjtQK03JUwBvzX2UQ&s",
  },
  {
    id: 3,
    title: "Необходимости для умного дома",
    description: "Обновите свой дом с новейшими умными устройствами по сниженным ценам.",
    originalPrice: "499 AZN",
    discountPrice: "399 AZN",
    image: "https://jordyjourno.com/wp-content/uploads/2015/11/smart-home-essentials-featured.jpg",
  },
  {
    id: 4,
    title: "Летняя распродажа носимых устройств",
    description: "Эксклюзивные летние предложения на умные часы и фитнес-трекеры.",
    originalPrice: "299 AZN",
    discountPrice: "199 AZN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ye4Lu-8scDRWXjLTWcg2LLNlyot7ODY2WQ&s",
  },
  {
    id: 5,
    title: "Мгновенная распродажа игрового оборудования",
    description: "Скидки до 30% на игровые ноутбуки, консоли и аксессуары.",
    originalPrice: "1499 AZN",
    discountPrice: "1049 AZN",
    image: "https://cdn.vox-cdn.com/thumbor/n5UeuJL5yOSpabYjGxP8CdpbEh4=/114x0:1530x776/1200x800/filters:focal(704x414:968x678)/cdn.vox-cdn.com/uploads/chorus_image/image/72130465/Screenshot_2023_03_29_152617.0.png",
  },
  {
    id: 6,
    title: "Скидки на телевизоры",
    description: "Обновите свой телевизор до 4K Smart TV и наслаждайтесь огромными скидками!",
    originalPrice: "1799 AZN",
    discountPrice: "1399 AZN",
    image: "https://www.livemint.com/lm-img/img/2024/06/07/600x338/amazon_tv_sale_1717747990378_1717748000376.jpg",
  },
];

const PromotionsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Акции</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotionsData.map((promo) => (
          <div key={promo.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <img 
              src={promo.image} 
              alt={promo.title} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
            <p className="text-gray-700 mb-4">{promo.description}</p>
            <p className="text-gray-500 line-through mb-1">{promo.originalPrice}</p>
            <p className="text-green-600 text-xl font-bold mb-4">{promo.discountPrice}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Купить сейчас</button>
          </div>
        ))}
      </div>

      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Ограниченные предложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Мгновенная распродажа: 50% скидка на все аксессуары</h3>
            <p className="text-gray-600 mb-4">
              Только в течение 48 часов, получите все аксессуары, такие как наушники, зарядные устройства и чехлы, с 50% скидкой!
            </p>
            <p className="text-lg text-red-500 mb-4">Поторопитесь, предложение скоро закончится!</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Купить сейчас</button>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Купи 1, получи 1 бесплатно на умные часы</h3>
            <p className="text-gray-600 mb-4">
              Купите любые умные часы и получите вторые бесплатно. Это предложение идеально подходит для подарков или обновления вашей техники!
            </p>
            <p className="text-lg text-red-500 mb-4">Ограниченное количество в наличии!</p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">Купить сейчас</button>
          </div>
        </div>
      </div>

      
      <div className="mt-16 bg-red-100 p-12 rounded-lg shadow-lg flex justify-between items-center">
        <div>
          <h3 className="text-4xl font-bold text-red-600">Сезонная распродажа</h3>
          <p className="text-lg mt-2 text-gray-700">Сэкономьте на широком ассортименте товаров! Предложение ограничено по времени.</p>
        </div>
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
          Посмотреть предложения
        </button>
      </div>
    </div>
  );
};

export default PromotionsPage;
