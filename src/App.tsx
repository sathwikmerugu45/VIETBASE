import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import PromoSection from './components/PromoSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/TripsSection';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PromoSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default App;