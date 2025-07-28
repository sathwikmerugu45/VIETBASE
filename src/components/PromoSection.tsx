import React from 'react';

const PromoSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Cross promo<br className="hidden lg:block" />
              <span className="text-yellow-400">opportunities</span>
            </h2>
            
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              I will help you get views in major dance hotspots like Spain, United States, South Korea and beyond. <span className="underline cursor-pointer hover:text-yellow-400">Find out more</span>
            </p>
          </div>

          {/* Right Content - Instagram Stats */}
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl border-2 border-white flex items-center justify-center">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-lg border-2 border-white"></div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm md:text-base">Instagram</div>
                <div className="text-lg md:text-xl font-semibold">@flowtheoryvisuals</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <div className="text-2xl md:text-4xl font-bold">1 Million</div>
                <div className="text-gray-400 text-sm md:text-base">Accounts Reached</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold">300K</div>
                <div className="text-gray-400 text-sm md:text-base">Accounts Engaged</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;