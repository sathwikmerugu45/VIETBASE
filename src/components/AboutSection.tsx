import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-yellow-400 font-medium text-sm sm:text-base">About Vietbase</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Asia corporate specialist<br />
              with global standards<span className="text-yellow-400">.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Entrust yourself into the hands of a true Asia specialist. Our multidisciplinary team is made up of real experts on the ground who will provide highly relevant, market-specific advice, management and support delivered to the highest international standards.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <button className="text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1 hover:text-yellow-300 hover:border-yellow-300 transition-colors">
                About us
              </button>
            </div>
          </div>

          {/* Right side - Team Photos */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="grid grid-cols-3 gap-4">
              
              {/* Large center photo */}
              <div className="col-span-2 row-span-2">
                <div className="w-full h-64 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Team member" 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
              </div>
              
              {/* Small top right photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              
              {/* Medium right photo */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 -mt-6">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
