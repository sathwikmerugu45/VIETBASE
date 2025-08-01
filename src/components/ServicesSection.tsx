import React from 'react';
import { Rocket, Settings, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-18 md:py-20 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <div className="text-yellow-400 text-sm md:text-base font-medium mb-3 md:mb-4 tracking-wider">
            ● OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Corporate services for every<br className="hidden sm:block" /> 
            part of your <span className="text-white">journey</span><span className="text-yellow-400">.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed md:leading-loose">
            Find intelligent answers to the most complex administrative issues you'll come up against as your business expands 
            into Vietnam and beyond. From establishing an investment vehicle through providing support for cross-border 
            transactions to setting up a fully operational local or regional presence, we will help you make the most out of every 
            incentive and benefit this unique region has to offer. Ask us for solutions, not just advice.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Formation */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full">
              {/* Icon aligned left */}
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>

              {/* Heading and label aligned left */}
              <div className="mb-6">
                <div className="text-xs md:text-sm text-gray-400 mb-2 uppercase tracking-wider text-left">
                  Getting started
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
                  Formation<span className="text-yellow-400">.</span>
                </h3>
              </div>

              {/* Bullet points aligned left */}
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                    Company registration
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                    Licensing & structuring support
                  </span>
                </div>
              </div>

              {/* Centered button with consistent width */}
              <div className="mt-auto flex justify-center">
                <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all w-full max-w-[200px]">
                  View all services
                </button>
              </div>
            </div>
          </div>

          {/* Administration */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 bg-teal-500 rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="mb-6 text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 uppercase tracking-wider">Staying compliant</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Administration<span className="text-yellow-400">.</span></h3>
              </div>
              <div className="space-y-3 text-left mb-8 flex-grow">
                {[
                  "Corporate secretarial",
                  "Accounting & tax compliance",
                  "Payroll outsourcing",
                  "PEO/Employer of record",
                  "HR administration",
                  "Work permit"
                ].map((text, idx) => (
                  <div className="flex items-start space-x-3" key={idx}>
                    <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">{text}</span>
                  </div>
                ))}
              </div>
              {/* Centered button with consistent width */}
              <div className="mt-auto flex justify-center">
                <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all w-full max-w-[200px]">
                  View all services
                </button>
              </div>
            </div>
          </div>

          {/* Advisory */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 bg-yellow-400 rounded-2xl flex items-center justify-center relative">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-black" />
                <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-black rounded-full flex items-center justify-center border border-yellow-400">
                  <span className="text-yellow-400 text-xs">×</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-xs md:text-sm text-gray-400 mb-2 uppercase tracking-wider">Streamlining operations</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Advisory<span className="text-yellow-400">.</span></h3>
              </div>
              <div className="space-y-3 text-left mb-8 flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">Business consulting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">Tax advisory & planning</span>
                </div>
              </div>
              {/* Centered button with consistent width */}
              <div className="mt-auto flex justify-center">
                <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all w-full max-w-[200px]">
                  View all services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;