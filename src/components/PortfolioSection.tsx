import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16">
          Strategic solutions<br className="hidden md:block" />
          that <span className="text-yellow-400">drive real results</span>
        </h2>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Success Story 1 */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">TechStart Vietnam</h3>
              <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
                European tech startup successfully launched<br className="hidden md:block" />
                operations in Ho Chi Minh City within 6 months.
              </p>
              <p className="text-gray-300 mb-4 text-sm md:text-base lg:hidden">
                Revenue grew 300% in first year with our strategic guidance.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="w-full max-w-xs mx-auto lg:mx-0 lg:w-48 h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="TechStart Vietnam" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-3 lg:space-y-4">
                <p className="text-gray-300 hidden lg:block">
                  Revenue grew 300% in first year with our<br className="hidden lg:block" />
                  strategic guidance and local expertise.
                </p>
                
                <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm">
                  <div>
                    <div className="font-bold text-base lg:text-lg">300% Growth</div>
                    <div className="text-gray-400">Revenue increase</div>
                  </div>
                  <div>
                    <div className="font-bold text-base lg:text-lg">6 Months</div>
                    <div className="text-gray-400">Setup time</div>
                  </div>
                </div>
                
                <button className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm lg:text-base">
                  Read Case Study
                </button>
              </div>
            </div>
            
            {/* Mobile Testimonial */}
            <div className="lg:hidden mt-8 p-6 bg-gray-900/50 rounded-2xl">
              <div className="text-yellow-400 text-4xl font-bold mb-4">"</div>
              <p className="text-base italic leading-relaxed text-gray-300">
                VIETBASE provided exceptional guidance throughout our Vietnam market entry. Their cultural insights and regulatory expertise saved us months of trial and error. Highly recommend their consulting services.
              </p>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Global Manufacturing Co.</h3>
              <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
                Established manufacturing facility in Dong Nai<br className="hidden md:block" />
                with full regulatory compliance and local partnerships.
              </p>
              <p className="text-gray-300 mb-4 text-sm md:text-base lg:hidden">
                Our strategic planning reduced setup costs by 40% and accelerated timeline.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="w-full max-w-xs mx-auto lg:mx-0 lg:w-48 h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Global Manufacturing Co." 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-3 lg:space-y-4">
                <p className="text-gray-300 hidden lg:block">
                  Our strategic planning reduced setup costs by<br className="hidden lg:block" />
                  40% and accelerated timeline significantly.
                </p>
                
                <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm">
                  <div>
                    <div className="font-bold text-base lg:text-lg">40% Savings</div>
                    <div className="text-gray-400">Setup costs</div>
                  </div>
                  <div>
                    <div className="font-bold text-base lg:text-lg">12 Months</div>
                    <div className="text-gray-400">Full operation</div>
                  </div>
                </div>
                
                <button className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm lg:text-base">
                  Read Case Study
                </button>
              </div>
            </div>
            
            {/* Mobile Testimonial */}
            <div className="lg:hidden mt-8 p-6 bg-gray-900/50 rounded-2xl">
              <div className="text-yellow-400 text-4xl font-bold mb-4">"</div>
              <p className="text-base italic leading-relaxed text-gray-300">
                Working with VIETBASE simplified our complex market entry process. Their deep understanding of Vietnamese business culture and regulatory landscape made our expansion seamless and successful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;