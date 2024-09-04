import React from 'react';

const CompareSamsungApple = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Сравнение Samsung и Apple</h1>
      <div className="grid grid-cols-2 gap-6">
        
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Samsung Galaxy S23</h2>
          <img src="samsung-image-url" alt="Samsung Galaxy S23" className="mb-4 w-screen  object-cover rounded-lg" />
          <p>Описание характеристик Samsung.</p>
          <p className="text-lg font-semibold text-green-500">Цена: 1500 AZN</p>
        </div>

        
        <div className="border p-4 w-full shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Apple iPhone 15</h2>
          <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review-1024x691.jpg" alt="Apple iPhone 15" className="mb-4 w-screen object-cover rounded-lg" />
          <p>Описание характеристик Apple.</p>
          <p className="text-lg font-semibold text-green-500">Цена: 2000 AZN</p>
        </div>
      </div>
    </div>
  );
};

export default CompareSamsungApple;
