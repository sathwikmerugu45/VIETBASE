import React from 'react';
import { Rocket, Settings, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-yellow-400 text-sm font-medium mb-4">● Our services</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white-800">
            Corporate services for every<br />
            part of your <span className="text-white-800">journey</span><span className="text-yellow-400">.</span>
          </h2>
          <p className="text-lg text-white-700 text-center max-w-5xl mx-auto leading-relaxed">
            Find intelligent answers to the most complex administrative issues you'll come up against as your business expands 
            into Vietnam and beyond. From establishing an investment vehicle through providing support for cross-border 
            transactions to setting up a fully operational local or regional presence, we will help you make the most out of every 
            incentive and benefit this unique region has to offer. Ask us for solutions, not just advice.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Formation */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center">
              <Rocket className="w-10 h-10 text-black" />
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Getting started</div>
              <h3 className="text-2xl font-bold mb-4 text-white-800">Formation<span className="text-yellow-400">.</span></h3>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Company registration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Licensing & structuring support</span>
              </div>
            </div>
            <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              View all
            </button>
          </div>

          {/* Administration */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-teal-500 rounded-2xl flex items-center justify-center">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Staying compliant</div>
              <h3 className="text-2xl font-bold mb-4 text-white-800">Administration<span className="text-yellow-400">.</span></h3>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Corporate secretarial</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Accounting & tax compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Payroll outsourcing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">PEO/Employer of record</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">HR administration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Work permit</span>
              </div>
            </div>
            <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              View all
            </button>
          </div>

          {/* Advisory */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center relative">
              <Briefcase className="w-10 h-10 text-black" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-xs">×</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Streamlining operations</div>
              <h3 className="text-2xl font-bold mb-4 text-white-800">Advisory<span className="text-yellow-400">.</span></h3>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Business consulting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 hover:text-yellow-400 cursor-pointer underline">Tax advisory & planning</span>
              </div>
            </div>
            <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              View all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;