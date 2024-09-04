// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext.jsx';
import Header from './components/Navbar.jsx';
import MainContent from './components/Main.jsx';
import PromotionsPage from './pages/PromotionsPage.jsx';
import StoresPage from './pages/StoresPage.jsx';
import CorporatePage from './pages/CorporatePage.jsx';
import CompareSamsungApple from './pages/CompareSamsungApple.jsx';
import SearchResults from './pages/SearchResults.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Catalog from './components/Catalog.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx'

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/corporate" element={<CorporatePage />} />
              <Route path="/compare" element={<CompareSamsungApple />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/NotFound" element={<NotFoundPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;