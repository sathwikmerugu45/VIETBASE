import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Zoltan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Your cinematic<br className="hidden lg:block" />
              <span className="text-yellow-400">dance videographer</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-sm md:text-lg text-gray-300 leading-relaxed">
              <p>
                Hi, I am Zoltan the creator at Flow Theory Visuals.
              </p>
              
              <p>
                Inspired by my personal struggle of not having good videos of my own <span className="underline">stage appearances</span> and needing to film my own promo videos, I set out on a journey to help talented latin dancers show their skills to the world with eye catching videography and created a dedicated platform to boost their social media presence.
              </p>
              
              <p>
                Currently I am exploring the Asian dance scene and learning Brazilian zouk. Feel free to say hi to me <span className="underline cursor-pointer hover:text-yellow-400">on Instagram</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;