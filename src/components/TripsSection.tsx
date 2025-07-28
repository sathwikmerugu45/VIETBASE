import React from 'react';

const TripsSection = () => {
  const trips = [
    {
      dates: { start: '18', end: '23', month: 'July', monthShort: 'July' },
      country: 'SG Singapore',
      countryShort: 'SG',
      event: 'Bachata Weekend Singapore',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Fully booked'
    },
    {
      dates: { start: '4', end: '6', month: 'October', monthShort: 'October' },
      country: 'VN Vietnam',
      countryShort: 'VN',
      event: '5th Vietnam Latin Xperience',
      location: 'Phuong Nguyen Building, Hanoi',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Fully booked'
    },
    {
      dates: { start: '11', end: '15', month: 'October', monthShort: 'October' },
      country: 'VN Vietnam',
      countryShort: 'VN',
      event: 'Heart Zouk Marathon & Retreat 2024',
      location: 'Hanoi',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Fully booked'
    },
    {
      dates: { start: '06', end: '08', month: 'December', monthShort: 'December' },
      country: 'KR South Korea',
      countryShort: 'KR',
      event: 'K-Sensual Weekender December 2024',
      location: 'Seoul',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'available'
    },
    {
      dates: { start: '20', end: '23', month: 'February', monthShort: 'February' },
      country: 'TW Taiwan',
      countryShort: 'TW',
      event: 'Taiwan Zouk Festival 2025',
      location: 'Taipei',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'available'
    }
  ];

  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8">
            Upcoming <span className="text-yellow-400">trips</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl">
            Join me at these destinations and schedule a private session, workshop demo or a set of social dance video to promote yourself and make memories to look back on.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-6">
          {trips.map((trip, index) => (
            <div key={index} className="flex items-center justify-between py-6 border-b border-gray-800">
              {/* Date */}
              <div className="flex items-center space-x-4 w-32">
                <div className="text-center">
                  <div className="text-3xl font-bold">{trip.dates.start}</div>
                  <div className="text-sm text-gray-400">{trip.dates.monthShort}</div>
                </div>
                <div className="text-2xl text-gray-600">—</div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{trip.dates.end}</div>
                  <div className="text-sm text-gray-400">{trip.dates.monthShort}</div>
                </div>
              </div>

              {/* Country */}
              <div className="w-40">
                <div className="text-2xl font-bold">{trip.country}</div>
              </div>

              {/* Event Info */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-800">
                  <img src={trip.logo} alt="Event logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-lg font-semibold">{trip.event}</div>
                  {trip.location && <div className="text-gray-400">{trip.location}</div>}
                </div>
              </div>

              {/* Status/Action */}
              <div className="w-40 text-right">
                {trip.status === 'Fully booked' ? (
                  <div className="bg-gray-700 text-gray-300 px-6 py-2 rounded-full inline-block">
                    Fully booked
                  </div>
                ) : (
                  <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                    Book me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {trips.map((trip, index) => (
            <div key={index} className="border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-800">
                    <img src={trip.logo} alt="Event logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{trip.dates.start}</div>
                    </div>
                    <div className="text-xl text-gray-600">—</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{trip.dates.end}</div>
                    </div>
                    <div className="text-sm text-gray-400 ml-2">{trip.dates.monthShort}</div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-800">
                  <img src={trip.logo} alt="Event logo" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xl font-bold mb-1">{trip.countryShort} <span className="text-lg font-normal">{trip.event}</span></div>
                {trip.location && <div className="text-gray-400 text-sm">{trip.location}</div>}
              </div>
              
              <div className="text-right">
                {trip.status === 'Fully booked' ? (
                  <div className="bg-gray-700 text-gray-300 px-6 py-2 rounded-full inline-block text-sm">
                    Fully booked
                  </div>
                ) : (
                  <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all text-sm">
                    Book me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;