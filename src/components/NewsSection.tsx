import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Vietnam's new Personal Data Protection Law: What businesses...",
      date: "July 25, 2025",
      category: "Insights",
      color: "bg-teal-400"
    },
    {
      title: "Vietnam's new Corporate Income Tax Law: Strategic overhaul...",
      date: "July 7, 2025", 
      category: "Insights",
      color: "bg-gradient-to-br from-teal-400 to-blue-500"
    },
    {
      title: "Quarterly Vietnam HR & Payroll Updates July 2025",
      date: "July 3, 2025",
      category: "Insights", 
      color: "bg-gradient-to-br from-yellow-400 to-red-500"
    }
  ];

  const podcasts = [
    {
      title: "Key role of the CFO: needs and benefits for investors in Vietnam",
      episode: "Episode 44"
    },
    {
      title: "Deep dive into ESG in Vietnam: what businesses need to know",
      episode: "Episode 43"
    },
    {
      title: "Vietnam Personal Data Protection Decree explained: compliance practices and strategies",
      episode: "Episode 42"
    }
  ];

  const events = [
    {
      title: "Vietnam new personal data protection law: Compliance readiness & practical implementation",
      date: "July 24, 2025"
    },
    {
      title: "Expand your trading business in Vietnam: Market entry and online growth strategies", 
      date: "July 10, 2025"
    },
    {
      title: "Developments in Vietnam's Tax Landscape – An overview of key changes in the past 12 months and what",
      date: "July 8, 2025"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* News Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white-800">
            Latest news & insights<span className="text-gray-800">.</span>
          </h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            View all News & insights
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${item.color} h-64 rounded-2xl mb-4 relative overflow-hidden`}>
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0 p-6">
                    <div className="w-12 h-8 bg-teal-400 rounded mb-4"></div>
                    <div className="w-8 h-12 bg-red-600 rounded"></div>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <div className="text-sm text-gray-400">
                {item.date} | {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Podcasts and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest Podcasts */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white-800">Latest podcasts</h3>
            <div className="space-y-6">
              {podcasts.map((podcast, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-8 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-yellow-400 transition-colors mb-1">
                      {podcast.title}
                    </h4>
                    <div className="text-sm text-gray-400">{podcast.episode}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white-800">Upcoming & recent events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-yellow-400 transition-colors mb-1">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-400">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;