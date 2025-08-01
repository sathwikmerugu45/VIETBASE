import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-white">
              <div className="font-bold text-2xl tracking-wider">VIETBASE</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">+84 28 3535 8200 (HCMC)</div>
                <div className="text-sm text-gray-400">We are open Monday – Friday:</div>
                <div className="text-sm text-gray-400">8.30 am to 5.30 pm (UTC+7)</div>
              </div>
              
              <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                Email us
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Formation</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Corporate governance</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Accounting & tax</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">HR outsourcing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Advisory</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* News & Insights */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">News & Insights</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Tax updates</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">HR & payroll updates</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Company news</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Industry reports</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Podcasts</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Vietbase Conversations</a></li>
            </ul>
            <div className="flex justify-end space-x-4 mt-12 pt-8 border-t border-gray-800">
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
          </div>
          
        </div>

        {/* Social Media */}
        {/* <div className="flex justify-end space-x-4 mt-12 pt-8 border-t border-gray-800">
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;