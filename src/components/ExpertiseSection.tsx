import React from 'react';
import { Shield, Globe, Zap, Link } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white-800">
            If you want to do business in Vietnam,<br />
            you will need an <span className="text-white-800">expert</span>.
          </h2>
          
          <p className="text-lg text-white-700 max-w-3xl">
            We know how to navigate the complexities and challenges of the regional<br />
            regulatory environment to make your Vietnam & Asia expansion<br />
            compliant & seamless.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Local knowledge</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our specialist team has grassroots knowledge and an acute local understanding of the market-specific intricacies and nuances.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Globe className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Hands-on attention</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All of our clients are treated with the same level of importance and get personalised, hands-on attention from our team.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Speed & flexibility</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We can make swift and effective decisions on your behalf, cutting through bureaucracy and guiding you forward.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-yellow-400 flex items-center justify-center">
              <Link className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold">Lasting commitment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're in it for the long run. People who'll be helping you are owner-managers, with a stake in our firm and a real interest in your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;