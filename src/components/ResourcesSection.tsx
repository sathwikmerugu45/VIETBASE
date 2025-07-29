import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      category: "Formation",
      title: "eID Implementation Guideline for Businesses via VNeID",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
      icon: "🔧"
    },
    {
      category: "Formation", 
      title: "Vietnam semiconductor brief (2024)",
      color: "bg-gradient-to-br from-teal-400 to-blue-500",
      icon: "💎"
    },
    {
      category: "Formation",
      title: "Consular legalisation of foreign documents used in Vietnam", 
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      icon: "📋"
    },
    {
      category: "Formation",
      title: "Vietnam investment snapshot (2025)",
      color: "bg-gradient-to-br from-teal-600 to-gray-800",
      icon: "📊"
    },
    {
      category: "Accounting & tax",
      title: "Value-added tax (VAT) in Vietnam: Tax rates, deductions & payments",
      color: "bg-gradient-to-br from-orange-500 to-yellow-500", 
      icon: "💰"
    },
    {
      category: "Accounting & tax",
      title: "Special consumption tax in Vietnam: Tax rates & credits",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      icon: "🧮"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-600 font-medium">Resources</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Get the facts you need to make the<br />
            right business decisions.
          </h2>
          
          {/* Category tabs */}
          <div className="flex justify-center space-x-8 mb-12">
            <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-2">
              Accounting & tax
            </button>
            <button className="text-gray-500 hover:text-gray-900 pb-2">
              Formation
            </button>
            <button className="text-gray-500 hover:text-gray-900 pb-2">
              HR & payroll
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Large featured resource */}
          <div className="relative">
            <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-2xl font-bold">Vietnam Business</div>
                  <div className="text-xl">Resource Guide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Resource list */}
          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-full ${resource.color} flex items-center justify-center text-white flex-shrink-0`}>
                  <span className="text-lg">{resource.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-yellow-600 font-medium mb-1">{resource.category}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {resource.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;