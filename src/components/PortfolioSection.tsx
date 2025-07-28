import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16">
          Timeless motion pictures<br className="hidden md:block" />
          that <span className="text-yellow-400">build your identity</span>
        </h2>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Tam Pham */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Tam Pham</h3>
              <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
                Created his online course Bachata Library and<br className="hidden md:block" />
                teaching the internet to master bachata, fast.
              </p>
              <p className="text-gray-300 mb-4 text-sm md:text-base lg:hidden">
                His engagements went 10x after posting this video on Instagram.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="w-full max-w-xs mx-auto lg:mx-0 lg:w-48 h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Tam Pham" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-3 lg:space-y-4">
                <p className="text-gray-300 hidden lg:block">
                  His engagements went 10x after posting this<br className="hidden lg:block" />
                  video on Instagram.
                </p>
                
                <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm">
                  <div>
                    <div className="font-bold text-base lg:text-lg">8,957 views</div>
                    <div className="text-gray-400">538 likes</div>
                  </div>
                  <div>
                    <div className="font-bold text-base lg:text-lg">109 comments</div>
                    <div className="text-gray-400">51 shares</div>
                  </div>
                </div>
                
                <button className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm lg:text-base">
                  Watch now
                </button>
              </div>
            </div>
            
            {/* Mobile Testimonial */}
            <div className="lg:hidden mt-8 p-6 bg-gray-900/50 rounded-2xl">
              <div className="text-yellow-400 text-4xl font-bold mb-4">"</div>
              <p className="text-base italic leading-relaxed text-gray-300">
                Zoltan helped us film a fantastic video. He told us exactly where to be and what to do. And our reel turned out amazing. I'd highly recommend hiring Flow Theory Visuals for your dance video needs.
              </p>
            </div>
          </div>

          {/* Becky Deeve */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Becky Deeve</h3>
              <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
                Got sponsored by Sensual Moves USA and<br className="hidden md:block" />
                now teaches internationally.
              </p>
              <p className="text-gray-300 mb-4 text-sm md:text-base lg:hidden">
                The videos we created still get referenced by promoters, even after 2 years.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="w-full max-w-xs mx-auto lg:mx-0 lg:w-48 h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Becky Deeve" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-3 lg:space-y-4">
                <p className="text-gray-300 hidden lg:block">
                  The videos we created still get referenced<br className="hidden lg:block" />
                  by promoters, even after 2 years.
                </p>
                
                <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm">
                  <div>
                    <div className="font-bold text-base lg:text-lg">76.2K views</div>
                    <div className="text-gray-400">4244 likes</div>
                  </div>
                  <div>
                    <div className="font-bold text-base lg:text-lg">310 comments</div>
                    <div className="text-gray-400">300 shares</div>
                  </div>
                </div>
                
                <button className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm lg:text-base">
                  Watch now
                </button>
              </div>
            </div>
            
            {/* Mobile Testimonial */}
            <div className="lg:hidden mt-8 p-6 bg-gray-900/50 rounded-2xl">
              <div className="text-yellow-400 text-4xl font-bold mb-4">"</div>
              <p className="text-base italic leading-relaxed text-gray-300">
                I like working with people like Zoltan because he simplifies the process of pursuing my passion and he makes doing what I love easy. The videos we have produced together consistently exceed my expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;