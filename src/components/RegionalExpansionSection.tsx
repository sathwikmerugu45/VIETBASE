import React from 'react';

const RegionalExpansionSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - World Map */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Add dot pattern with yellow/teal colors */}
              <div className="grid grid-cols-20 gap-1">
                {/*  */}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 font-medium">Seamless regional expansion</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Expand & operate<br />
                across Asia under<br />
                one invoice<span className="text-yellow-400">.</span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Thanks to our on-the-ground presence in Asia's hard-to-navigate markets and a secure client platform, you can expand your Vietnam business into other markets in Asia with ease and confidence.
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                View all locations
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Explore solution
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">18</div>
            <div className="text-gray-400 font-medium">Markets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">28</div>
            <div className="text-gray-400 font-medium">Offices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">17,000+</div>
            <div className="text-gray-400 font-medium">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">1,700+</div>
            <div className="text-gray-400 font-medium">Employees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalExpansionSection;