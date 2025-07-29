import React from 'react';

const RegionalExpansionSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - World Map */}
          <div className="relative">
            {/* Simplified world map made of dots */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                Asia region dots
                {/* {Array.from({ length: 200 }).map((_, i) => {
                  const x = 500 + (i % 20) * 8 + Math.random() * 40;
                  const y = 100 + Math.floor(i / 20) * 8 + Math.random() * 20;
                  return (
                    <circle
                      key={`asia-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#14b8a6"
                      opacity={Math.random() > 0.3 ? 1 : 0}
                    />
                  );
                })} */}
                
                {/* Europe region dots */}
                {/* {Array.from({ length: 150 }).map((_, i) => {
                  const x = 350 + (i % 15) * 6 + Math.random() * 30;
                  const y = 80 + Math.floor(i / 15) * 6 + Math.random() * 15;
                  return (
                    <circle
                      key={`europe-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#14b8a6"
                      opacity={Math.random() > 0.4 ? 1 : 0}
                    />
                  );
                })} */}
                
                {/* Americas region dots */}
                {/* {Array.from({ length: 180 }).map((_, i) => {
                  const x = 150 + (i % 18) * 7 + Math.random() * 35;
                  const y = 120 + Math.floor(i / 18) * 7 + Math.random() * 18;
                  return (
                    <circle
                      key={`americas-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#14b8a6"
                      opacity={Math.random() > 0.5 ? 1 : 0}
                    />
                  );
                })} */}
                
                {/* Africa region dots */}
                {/* {Array.from({ length: 120 }).map((_, i) => {
                  const x = 380 + (i % 12) * 6 + Math.random() * 25;
                  const y = 200 + Math.floor(i / 12) * 8 + Math.random() * 20;
                  return (
                    <circle
                      key={`africa-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#14b8a6"
                      opacity={Math.random() > 0.4 ? 1 : 0}
                    />
                  );
                })} */}
                
                {/* Australia region dots */}
                {/* {Array.from({ length: 60 }).map((_, i) => {
                  const x = 650 + (i % 10) * 5 + Math.random() * 20;
                  const y = 280 + Math.floor(i / 10) * 5 + Math.random() * 15;
                  return (
                    <circle
                      key={`australia-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#14b8a6"
                      opacity={Math.random() > 0.3 ? 1 : 0}
                    />
                  );
                })} */}
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-600 font-medium">Seamless regional expansion</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Expand & operate<br />
                across Asia under<br />
                one invoice.
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Thanks to our on-the-ground presence in Asia's hard-to-navigate markets and a secure client platform, you can expand your Vietnam business into other markets in Asia with ease and confidence. Your relationship manager will coordinate all we do for you, across every market. We can even combine everything under one invoice.
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
                View all locations
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Explore solution
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">18</div>
            <div className="text-gray-600 font-medium">Markets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">28</div>
            <div className="text-gray-600 font-medium">Offices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">17,000+</div>
            <div className="text-gray-600 font-medium">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">1,700+</div>
            <div className="text-gray-600 font-medium">Employees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalExpansionSection;