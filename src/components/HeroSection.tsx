import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white pt-20 md:pt-0 md:min-h-screen md:flex md:items-center overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
         <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-center md:text-left">
  <span>Ready to build</span><br />
  <span>your business</span><br />
  <span className="text-yellow-400">
    <span className="text-[0.9em]">in</span> Vietnam?
  </span>
</h1>



    
          {/* Creator Info */}
          <div className="flex items-center space-x-4">
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
  <img 
    src="https://clavistraconsultants.com/image2.jpg" 
    alt="VIETBASE Founder" 
    className="w-full h-full object-cover"
  />
</div>

            <div>
              <p className="text-sm md:text-lg text-gray-300">
                Our mission is to bridge foreign ambition with<br className="hidden md:block" />
                local execution for sustainable success.
              </p>
              <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">— KG</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm md:text-base">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm md:text-base">
              Schedule Consultation
            </button>
          </div>
        </div>

       {/* Right Image */}
        <div className="relative order-1 lg:order-2">
  <div className="rounded-3xl overflow-hidden max-w-xs mx-auto lg:max-w-md">
    <img 
      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
      alt="Business consulting in Vietnam" 
      className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover"
    />
  </div> 
</div>
      </div>
    </section>
  );
};
export default HeroSection;