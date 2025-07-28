import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonial 1 */}
          <div className="space-y-6">
            <div className="text-yellow-400 text-6xl font-bold">"</div>
            <p className="text-xl lg:text-2xl italic leading-relaxed">
              VIETBASE provided exceptional guidance throughout our 
              Vietnam market entry. Their cultural insights and 
              regulatory expertise saved us months of trial and error. 
              Highly recommend their consulting services.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-6">
            <div className="text-yellow-400 text-6xl font-bold">"</div>
            <p className="text-xl lg:text-2xl italic leading-relaxed">
              Working with VIETBASE simplified our complex market 
              entry process. Their deep understanding of Vietnamese 
              business culture and regulatory landscape made our 
              expansion seamless and successful beyond our 
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;