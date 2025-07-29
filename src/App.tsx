import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ResourceSection from './components/ResourceSection';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import ClientStoriesSection from './components/ClientStoriesSection';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <ResourceSection />
      <NewsSection />
      <ServicesSection />
      <ClientStoriesSection />
    </div>
  );
}

export default App;