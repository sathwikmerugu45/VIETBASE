import React from 'react';
import { Shield, Globe, Zap, Link, ChevronLeft, ChevronRight } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="bg-black text-white py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading & Intro */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-white whitespace-normal">
            If you want to do business in Vietnam,<br />
            you will need an <span className="text-white">expert</span>.
          </h2>
          <p className="text-lg text-white-700 max-w-3xl mt-4">
            We know how to navigate the complexities and challenges of the regional<br />
            regulatory environment to make your Vietnam & Asia expansion<br />
            compliant & seamless.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Local knowledge</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our specialist team has grassroots knowledge and an acute local understanding of the market-specific intricacies and nuances.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Globe className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Hands-on attention</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All of our clients are treated with the same level of importance and get personalised, hands-on attention from our team.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Speed & flexibility</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We can make swift and effective decisions on your behalf, cutting through bureaucracy and guiding you forward.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Link className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Lasting commitment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're in it for the long run. People who'll be helping you are owner-managers, with a stake in our firm and a real interest in your success.
            </p>
          </div>
        </div>

        {/* Tax Guide Resource */}
        <div className="bg-gradient-to-r from-blue-900 via-teal-700 to-teal-600 rounded-3xl p-6 sm:p-8 lg:p-12 mt-20 relative overflow-hidden">
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
