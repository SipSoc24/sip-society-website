import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    event: "Wedding Reception",
    text: "The team at Sip Society made our wedding absolutely perfect. The cocktails were amazing and the service was impeccable!"
  },
  {
    name: "Michael Chen",
    event: "Corporate Event",
    text: "Professional, punctual, and passionate about their craft. Our employees are still talking about the signature cocktails!"
  },
  {
    name: "Emily Williams",
    event: "Birthday Celebration",
    text: "From planning to execution, everything was flawless. They truly went above and beyond our expectations."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light/90 p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="font-semibold text-gray-600">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}