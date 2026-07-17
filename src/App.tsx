import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/navigation/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

import './App.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#020617] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-300">
          
          {/* Global Header Navigation */}
          <Navbar />
          
          {/* Main Layout Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Products Module */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              
              {/* Portfolio Module */}
              <Route path="/portfolio" element={<Portfolio />} />
              
              {/* Careers Module */}
              <Route path="/careers" element={<Careers />} />
              
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Legal Pages */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              
              {/* Fallback Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          {/* Global Footer Grid */}
          <Footer />
          
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
