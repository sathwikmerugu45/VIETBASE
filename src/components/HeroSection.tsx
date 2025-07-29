import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20 md:pt-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Ready to build your<br />
            <span className="text-yellow-400">business in Vietnam?</span>
          </h1>
    
          {/* Creator Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="VIETBASE Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm md:text-lg text-gray-300">
                Our mission is to bridge foreign ambition with<br className="hidden md:block" />
                local execution for sustainable success.
              </p>
              <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">— VIETBASE Team</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm md:text-base">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm md:text-base">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Business consulting in Vietnam" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;