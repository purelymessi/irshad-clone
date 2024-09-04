import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Скидка на Samsung Galaxy S23",
      description: "Сэкономьте 20% на последней модели Samsung Galaxy S23. Предложение действительно ограниченное время.",
      originalPrice: "1299 AZN",
      discountPrice: "1040 AZN",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHH0hDNTTt5u3636KE5kOx5bdWxLvzJtYEQ&s",
      quantity: 1,
    },
    {
      id: 2,
      title: "Распродажа Apple MacBook Air",
      description: "Скидка до 15% на все модели MacBook Air. Отлично подходит для студентов и профессионалов.",
      originalPrice: "2199 AZN",
      discountPrice: "1869 AZN",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95SAb6py9dydN3tEKKrjtQK03JUwBvzX2UQ&s",
      quantity: 1,
    },
    {
      id: 3,
      title: "Необходимости для умного дома",
      description: "Обновите свой дом с новейшими умными устройствами по сниженным ценам.",
      originalPrice: "499 AZN",
      discountPrice: "399 AZN",
      image: "https://jordyjourno.com/wp-content/uploads/2015/11/smart-home-essentials-featured.jpg",
      quantity: 1,
    },
    {
      id: 4,
      title: "Летняя распродажа носимых устройств",
      description: "Эксклюзивные летние предложения на умные часы и фитнес-трекеры.",
      originalPrice: "299 AZN",
      discountPrice: "199 AZN",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ye4Lu-8scDRWXjLTWcg2LLNlyot7ODY2WQ&s",
      quantity: 1,
    },
    {
      id: 5,
      title: "Мгновенная распродажа игрового оборудования",
      description: "Скидки до 30% на игровые ноутбуки, консоли и аксессуары.",
      originalPrice: "1499 AZN",
      discountPrice: "1049 AZN",
      image: "https://cdn.vox-cdn.com/thumbor/n5UeuJL5yOSpabYjGxP8CdpbEh4=/114x0:1530x776/1200x800/filters:focal(704x414:968x678)/cdn.vox-cdn.com/uploads/chorus_image/image/72130465/Screenshot_2023_03_29_152617.0.png",
      quantity: 1,
    },
    {
      id: 6,
      title: "Скидки на телевизоры",
      description: "Обновите свой телевизор до 4K Smart TV и наслаждайтесь огромными скидками!",
      originalPrice: "1799 AZN",
      discountPrice: "1399 AZN",
      image: "https://www.livemint.com/lm-img/img/2024/06/07/600x338/amazon_tv_sale_1717747990378_1717748000376.jpg",
      quantity: 1,
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + parseFloat(item.discountPrice.replace(' AZN', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Корзина</h1>
      {items.length === 0 ? (
        <p className="text-lg">Ваша корзина пуста</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="mt-4 p-6 bg-white shadow rounded-lg flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-600">Описание: {item.description}</p>
                <p className="text-gray-600">Оригинальная цена: {item.originalPrice}</p>
                <p className="text-gray-600">Цена со скидкой: {item.discountPrice}</p>
                <p className="text-gray-600">Количество: {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg mr-2"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold">Итоговая цена</h2>
            <p className="text-gray-600 text-xl">{getTotalPrice()} AZN</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
