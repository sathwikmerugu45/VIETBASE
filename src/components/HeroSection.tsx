import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20 md:pt-0 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full opacity-30">
        <div className="grid grid-cols-12 gap-2 h-full items-center">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                Math.random() > 0.7 ? 'bg-yellow-400' : 'bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          <div className="text-yellow-400 text-sm md:text-base font-medium">
            Professional corporate services in Vietnam
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white-800">
            Easily set up, manage<br />
            & advance your business<br />
            in <span className="text-white-800">Vietnam</span>.
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg text-white-800">
              VIETBASE provides a <span className="underline font-semibold">complete suite of corporate services</span><br />
              for doing business in Vietnam and Asia seamlessly.<br />
              Leverage our practical expertise to protect your<br />
              investment.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Schedule a discovery call
            </button>
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Expert 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Expert 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-sm text-white-600">
                You'll be talking with<br />
                one of our experts.
              </div>
            </div>
          </div>
        </div>

        {/* Right side - kept minimal for the dots pattern */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;