import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
