
import React from 'react';
import BannerSection from '../components/BannerSection.jsx';
import PopularProductsSection from '../components/PopularProductsSection.jsx';
import { useCart } from '../contexts/CartContext.jsx';

const bannerData = {
  imageUrl: 'https://www.soliton.az/images/articles/2024/03/06/20240306115640098_c1_1.jpg',
  title: 'Redmi Note 13',
  discount: 'Скидка 150 AZN!',
  oldPrice: '499 AZN',
  newPrice: '349 AZN',
  installments: [
    { months: 6, price: '58.17 AZN' },
    { months: 12, price: '30.99 AZN' },
    { months: 18, price: '20.99 AZN' },
  ],
};

const popularProducts = [
  {
    id: 1,
    name: 'HONOR Choice Earbuds',
    image: 'https://explorehonor.com/cdn/shop/files/HONORCHOICEEarbudsX5_White_4_1500x.jpg?v=1706877422',
    price: '49.99 AZN',
    description: 'Беспроводные Bluetooth наушники',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review-1024x691.jpg',
    price: '2999.99 AZN',
    description: '128 GB - Черный космос',
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

const MainContent = () => {
  const { addToCart } = useCart();

  return (
    <main className="flex-grow p-8 bg-gray-100">
      <BannerSection {...bannerData} />
      <PopularProductsSection products={popularProducts} addToCart={addToCart} />
    </main>
  );
};

export default MainContent;
