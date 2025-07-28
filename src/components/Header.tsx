import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="text-white">
            <div className="font-bold text-sm md:text-lg tracking-wider">VIETBASE</div>
            <div className="text-xs md:text-sm tracking-widest">CONSULTING</div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4">
          <button className="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-white hover:text-black transition-all text-sm md:text-base">
            Get Consultation
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">Services</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">Success Stories</a>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            Get Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;