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
              Zoltan helped us film a fantastic video. He told us 
              exactly where to be and what to do. And our reel 
              turned out amazing. I'd highly recommend hiring 
              Flow Theory Visuals for your dance video needs.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-6">
            <div className="text-yellow-400 text-6xl font-bold">"</div>
            <p className="text-xl lg:text-2xl italic leading-relaxed">
              I like working with people like Zoltan because he 
              simplifies the process of pursuing my passion and 
              he makes doing what I love easy. The videos we 
              have produced together consistently exceed my 
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;