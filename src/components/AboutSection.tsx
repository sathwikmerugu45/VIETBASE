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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="VIETBASE Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Your trusted<br className="hidden lg:block" />
              <span className="text-yellow-400">Vietnam business partner</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-sm md:text-lg text-gray-300 leading-relaxed">
              <p>
                Welcome to VIETBASE CONSULTING - your strategic partner for business success in Vietnam.
              </p>
              
              <p>
                Born from the challenges faced by <span className="underline">expat entrepreneurs</span> navigating Vietnam's complex business landscape, we created a comprehensive consulting platform that bridges foreign ambition with local execution, ensuring sustainable success for both international and Vietnamese businesses.
              </p>
              
              <p>
                We specialize in bi-cultural expertise, combining global business acumen with deep Vietnamese market knowledge. Connect with us to discover how we can accelerate your <span className="underline cursor-pointer hover:text-yellow-400">business growth in Vietnam</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;