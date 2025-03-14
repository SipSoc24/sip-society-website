import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

export function About() {
  return (
    <section className="py-32 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-body-small tracking-wider">CHARLOTTE, NC</span>
            </div>
            <h2 className="text-h2 leading-tight">More than just a bartending service—it's an experience.</h2>
            <Sparkles className="w-12 h-12" />
          </div>
          
          <div className="space-y-6 text-light-80">
            <p className="text-body leading-relaxed">
              Bringing sophistication, creativity, and top-tier hospitality to every event, we craft unforgettable moments with every pour.
            </p>
            <p className="text-body leading-relaxed">
              Whether it's a wedding, corporate gathering, or private celebration, our expert bartenders deliver impeccable service, signature cocktails, and a touch of elegance that sets your event apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}