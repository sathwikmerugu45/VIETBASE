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
{/* Mobile-Optimized Expertise Cards */}
{/* WWE-Style Expertise Cards */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    {/* Card 1 - Blue */}
    <div className="group relative h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white-500">
  {/* Top Section */}
  <div className="bg-black-900 p-6 sm:p-7 flex flex-col items-center flex-1">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-yellow-500/20 transition-colors duration-300 relative -mt-3">
      <Shield className="w-7 h-7 text-yellow-500" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center mt-0">
      Local <><br /></>Knowledge
    </h3>
    <div className="h-px w-12 sm:w-16 bg-yellow-500/40 mt-auto mb-0 mx-auto"></div>
  </div>

  {/* Bottom Section */}
  <div className="bg-teal-600/90 p-5 sm:p-6 flex items-start h-[120px]">
    <p className="text-gray-100 text-sm sm:text-base leading-normal text-left w-full">
      Our specialist team has grassroots knowledge and an acute local understanding.
    </p>
  </div>
</div>


    {/* Card 2 - Teal */}
    <div className="group relative h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white-500">
      {/* Top Section */}
  <div className="bg-black-900 p-6 sm:p-7 flex flex-col items-center flex-1">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300 relative -mt-3">
          <Globe className="w-7 h-7 text-yellow-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center mt-0">
          Hands-on Attention
        </h3>
        <div className="h-px w-12 sm:w-16 bg-yellow-500/40 mt-auto mb-0 mx-auto"></div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-yellow-700 p-5 sm:p-6 flex items-start h-[120px]">
        <p className="text-gray-100 text-sm sm:text-base leading-normal text-left w-full">
          All clients get personalised, hands-on attention from our team.
        </p>
      </div>
    </div>

    {/* Card 3 - Purple */}
    <div className="group relative h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white-500">
      {/* Top Section */}
  <div className="bg-black-900 p-6 sm:p-7 flex flex-col items-center flex-1">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300 relative -mt-3">
          <Zap className="w-7 h-7 text-yellow-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center mt-0">
          Speed & Flexibility
        </h3>
        <div className="h-px w-12 sm:w-16 bg-yellow-500/40 mt-auto mb-0 mx-auto"></div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-teal-600/90 p-5 sm:p-6 flex items-start h-[120px]">
        <p className="text-gray-100 text-sm sm:text-base leading-normal text-left w-full">
          Swift decisions cutting through bureaucracy.
        </p>
      </div>
    </div>

    {/* Card 4 - Amber */}
    <div className="group relative h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white-500">
      {/* Top Section */}
  <div className="bg-black-900 p-6 sm:p-7 flex flex-col items-center flex-1">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300 relative -mt-3">
          <Link className="w-7 h-7 text-yellow-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center mt-0">
          Lasting Commitment
        </h3>
        <div className="h-px w-12 sm:w-16 bg-yellow-500/40 mt-auto mb-2 mx-auto"></div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-yellow-700 p-5 sm:p-6 flex items-start h-[120px]">
        <p className="text-gray-100 text-sm sm:text-base leading-normal text-left w-full">
          Owner-managers with real interest in your success.
        </p>
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
