import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './views/Navbar';
import HeroSection from './views/HeroSection';
import IPhoneAirSection from './views/IPhoneAirSection';
import ProductGridSection from './views/ProductGridSection';
import Footer from './views/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IPhoneAirSection />
      <ProductGridSection />
      <Footer />
    </div>
  );
};

export default App;