import React from 'react';
import { Shield, Globe, Zap, Link, ChevronLeft, ChevronRight } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="bg-black text-white py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading & Intro */}
        <div className="mb-2 px-4 md:px-8 lg:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-white leading-snug">
    If you want to do business in Vietnam,<br className="hidden sm:block" />
    you will need an <span className="text-white">expert</span>.
  </h2>
  <p className="text-base sm:text-lg text-white max-w-2xl mt-4 leading-relaxed">
    We know how to navigate the complexities and challenges of the regional
    regulatory environment to make your Vietnam & Asia expansion
    compliant & seamless.
  </p>
</div>

 {/* Expertise Cards with Services Section Styling */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
    {/* Card 1 */}
    <div className="group relative bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Changed from gradient to bg-gray-900 */}
      <div className="absolute inset-0 bg-yellow-500/10 rounded-xl border border-gray-700 group-hover:border-yellow-500/40 transition-all duration-300">
        {/* Changed border color */}
      </div>
      <div className="relative space-y-3 sm:space-y-4 text-center flex-1 flex flex-col">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto group-hover:bg-yellow-500/20 transition-colors duration-300 mb-2 sm:mb-4">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
        </div>
        <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold sm:font-bold tracking-tight mb-2 sm:mb-3">Local knowledge</h3>
        <div className="bg-gray-800 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 group-hover:border-yellow-500/30 transition-colors duration-300 flex-1 flex items-center">
          {/* Changed to bg-gray-800 */}
          <p className="text-xs sm:text-sm leading-snug sm:leading-relaxed text-gray-300 w-full">
            Our specialist team has grassroots knowledge and an acute local understanding.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group relative bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Changed from gradient to bg-gray-900 */}
      <div className="absolute inset-0 bg-yellow-500/10 rounded-xl border border-gray-700 group-hover:border-yellow-500/40 transition-all duration-300">
        {/* Changed border color */}
      </div>
      <div className="relative space-y-3 sm:space-y-4 text-center flex-1 flex flex-col">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto group-hover:bg-yellow-500/20 transition-colors duration-300 mb-2 sm:mb-4">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
        </div>
        <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold sm:font-bold tracking-tight mb-2 sm:mb-3">Hands-on attention</h3>
        <div className="bg-gray-800 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 group-hover:border-yellow-500/30 transition-colors duration-300 flex-1 flex items-center">
          {/* Changed to bg-gray-800 */}
          <p className="text-xs sm:text-sm leading-snug sm:leading-relaxed text-gray-300 w-full">
            All clients get personalised, hands-on attention from our team.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group relative bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Changed from gradient to bg-gray-900 */}
      <div className="absolute inset-0 bg-yellow-500/10 rounded-xl border border-gray-700 group-hover:border-yellow-500/40 transition-all duration-300">
        {/* Changed border color */}
      </div>
      <div className="relative space-y-3 sm:space-y-4 text-center flex-1 flex flex-col">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto group-hover:bg-yellow-500/20 transition-colors duration-300 mb-2 sm:mb-4">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
        </div>
        <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold sm:font-bold tracking-tight mb-2 sm:mb-3">Speed & flexibility</h3>
        <div className="bg-gray-800 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 group-hover:border-yellow-500/30 transition-colors duration-300 flex-1 flex items-center">
          {/* Changed to bg-gray-800 */}
          <p className="text-xs sm:text-sm leading-snug sm:leading-relaxed text-gray-300 w-full">
            Swift decisions cutting through bureaucracy.
          </p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group relative bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Changed from gradient to bg-gray-900 */}
      <div className="absolute inset-0 bg-yellow-500/10 rounded-xl border border-gray-700 group-hover:border-yellow-500/40 transition-all duration-300">
        {/* Changed border color */}
      </div>
      <div className="relative space-y-3 sm:space-y-4 text-center flex-1 flex flex-col">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto group-hover:bg-yellow-500/20 transition-colors duration-300 mb-2 sm:mb-4">
          <Link className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
        </div>
        <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold sm:font-bold tracking-tight mb-2 sm:mb-3">Lasting commitment</h3>
        <div className="bg-gray-800 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 group-hover:border-yellow-500/30 transition-colors duration-300 flex-1 flex items-center">
          {/* Changed to bg-gray-800 */}
          <p className="text-xs sm:text-sm leading-snug sm:leading-relaxed text-gray-300 w-full">
            Owner-managers with real interest in your success.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Tax Guide Resource */}
        <div className="bg-gradient-to-r from-blue-900 via-teal-700 to-teal-600 rounded-3xl p-6 sm:p-8 lg:p-12 mt-18 relative overflow-hidden">
          {/* Navigation Arrows */}
          <div className="absolute right-4 top-4 sm:right-8 sm:top-8 z-10">
            <div className="flex space-x-2">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 w-full sm:max-w-sm">
              <div className="w-full h-48 bg-gradient-to-br from-red-500 via-teal-500 to-blue-500 rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Vietnam tax</div>
                  <div className="text-lg">guide</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-yellow-400 text-sm font-medium">Free resource</div>
              <h3 className="text-3xl sm:text-4xl font-bold leading-snug">
                Taxation in Vietnam: Complete<br />
                guide (2025)<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-lg text-gray-300">
                A comprehensive guide covering taxation in Vietnam for both<br />
                corporate and individual taxpayers.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
