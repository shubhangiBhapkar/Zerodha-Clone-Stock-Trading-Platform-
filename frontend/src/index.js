import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home2/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import PageNotFound from "./landing_page/PageNotFound";
import Navbar from "./landing_page/Navbar";
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
