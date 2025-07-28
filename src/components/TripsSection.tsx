import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '🏢',
      title: 'Business Setup & Market Entry',
      description: 'Complete business registration, licensing, and market entry strategy',
      features: ['Company Registration', 'Legal Compliance', 'Market Research', 'Entry Strategy'],
      status: 'available'
    },
    {
      icon: '📈',
      title: 'Strategic Growth Consulting',
      description: 'Tailored growth strategies and operational excellence frameworks',
      features: ['Growth Planning', 'Operational Optimization', 'Performance Metrics', 'Strategic Roadmaps'],
      status: 'available'
    },
    {
      icon: '⚖️',
      title: 'Regulatory & Legal Compliance',
      description: 'Navigate Vietnam\'s regulatory landscape with confidence',
      features: ['Legal Advisory', 'Compliance Monitoring', 'Risk Assessment', 'Documentation'],
      status: 'available'
    },
    {
      icon: '🤝',
      title: 'Local Partner & Talent Matching',
      description: 'Connect with trusted local partners and skilled professionals',
      features: ['Partner Sourcing', 'Talent Acquisition', 'Network Access', 'Due Diligence'],
      status: 'available'
    },
    {
      icon: '🌏',
      title: 'Cultural Onboarding & Lifestyle',
      description: 'Seamless cultural integration and lifestyle support services',
      features: ['Cultural Training', 'Lifestyle Support', 'Relocation Assistance', 'Community Integration'],
      status: 'available'
    }
  ];

  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8">
            Core <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl">
            Our comprehensive suite of services is designed to support every aspect of your business journey in Vietnam, from initial market entry to long-term growth and expansion.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between py-8 border-b border-gray-800">
              {/* Icon */}
              <div className="flex items-center space-x-6 w-20">
                <div className="text-4xl">{service.icon}</div>
              </div>

              {/* Service Info */}
              <div className="flex items-center space-x-8 flex-1">
                <div className="flex-1">
                  <div className="text-2xl font-bold mb-2">{service.title}</div>
                  <div className="text-gray-400 mb-4">{service.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="w-48 text-right">
                <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">{service.icon}</div>
                <div className="flex-1">
                  <div className="text-xl font-bold mb-1">{service.title}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-gray-900/50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
              Our <span className="text-yellow-400">Unique Value Proposition</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🌏</span>
                </div>
                <h4 className="text-lg font-bold">Bi-Cultural Expertise</h4>
                <p className="text-gray-400 text-sm">
                  Global business acumen meets local Vietnamese know-how for optimal positioning.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-bold">Strategic + Operational</h4>
                <p className="text-gray-400 text-sm">
                  From market entry to expansion with proven frameworks and execution support.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h4 className="text-lg font-bold">Legal & Compliance</h4>
                <p className="text-gray-400 text-sm">
                  Local legal partners and streamlined processes for confident compliance.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-bold">Talent Ecosystem</h4>
                <p className="text-gray-400 text-sm">
                  Access to trusted professionals and partners to accelerate growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;