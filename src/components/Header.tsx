import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Services', href: '#' },
    { label: 'Market entry', href: '#' },
    { label: 'News & insights', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Q', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden relative">
              <img 
                src={logo} 
                alt="VIETBASE Logo" 
                className="absolute top-1/2 left-1/2 w-[110%] h-[110%] object-contain -translate-x-1/2 -translate-y-1/2" 
                style={{ minWidth: '110%', minHeight: '110%' }}
              />
            </div>
            <div className="text-white">
              <div className="font-bold text-sm md:text-lg tracking-wider">VIETBASE</div>
              <div className="text-xs md:text-sm tracking-widest">CONSULTING CO.</div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-white hover:text-yellow-400 transition-colors ${item.label === 'Resources' ? 'flex items-center' : ''}`}
              >
                {item.label}
                {item.label === 'Resources' && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all ml-4">
              Get Consultation
            </button>
          </nav>
        </div>

        {/* Mobile Menu - Vertical Layout */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-8">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white text-lg py-2 hover:text-yellow-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all mt-4 w-full md:w-auto">
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;