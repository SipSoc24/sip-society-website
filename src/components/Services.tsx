import React, { useState } from 'react';
import { GlassWater, Wine, Package, Sparkles, Users, Crown, Palette, ChevronRight, GraduationCap, FileLock as Cocktail, Coffee, Store, UserCheck, ChefHat, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: <GlassWater className="w-12 h-12" />,
    title: "Event Bartending Services",
    description: "Professional bartenders for weddings, corporate events, private parties, birthdays, and festivals",
    details: [
      "Custom cocktail creation",
      "Signature drinks",
      "Personalized menus",
      "Event theme integration"
    ]
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Bar Setup & Equipment",
    description: "Complete bar setup solutions with premium equipment and accessories",
    details: [
      "Portable bar stations",
      "Glassware & tools",
      "Ice & garnishes",
      "Mixers & supplies"
    ]
  },
  {
    icon: <Wine className="w-12 h-12" />,
    title: "Alcohol Catering Packages",
    description: "Comprehensive beverage packages tailored to your event needs",
    details: [
      "Full bar service",
      "Purchasing guidance",
      "Custom packages"
    ]
  },
  {
    icon: <Cocktail className="w-12 h-12" />,
    title: "Specialty Experiences",
    description: "Unique cocktail experiences and interactive demonstrations",
    details: [
      "Cocktail classes",
      "Flair bartending",
      "Mixology shows",
      "Mocktail bars"
    ]
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    title: "Mobile Bar Staffing",
    description: "Professional and experienced bar staff for any event size",
    details: [
      "Licensed bartenders",
      "Barbacks",
      "Cocktail servers",
      "Event waitstaff"
    ]
  },
  {
    icon: <Crown className="w-12 h-12" />,
    title: "VIP & Luxury Service",
    description: "Premium bar service for exclusive and high-end events",
    details: [
      "High-end cocktails",
      "Champagne service",
      "Bespoke curation",
      "Concierge service"
    ]
  }
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-light mb-4">Our Premium Services</h2>
          <p className="text-light/80 text-body-small max-w-2xl mx-auto">
            Elevate your event with our comprehensive range of professional bartending services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 
                ${activeService === index ? 'bg-light/90' : 'bg-light/80'} 
                hover:bg-light cursor-pointer`}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="p-8">
                <div className={`flex justify-center mb-6 transition-colors duration-300
                  ${activeService === index ? 'text-dark' : 'text-dark/80'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-h3 text-dark text-center mb-4">{service.title}</h3>
                
                <p className={`text-dark/80 text-body-small text-center mb-6 transition-all duration-300
                  ${activeService === index ? 'opacity-0 h-0' : 'opacity-100'}`}>
                  {service.description}
                </p>

                <div className={`space-y-3 transition-all duration-300
                  ${activeService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-dark/80">
                      <ChevronRight className="w-4 h-4 mr-2 text-dark" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className={`flex items-center justify-center mt-6 text-dark/60 text-sm
                  ${activeService === index ? 'opacity-0' : 'opacity-100'}`}>
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Click to view details</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark/20 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center space-x-2 text-light hover:text-light/80 transition-colors duration-300">
            <span>Book Your Premium Bar Experience</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}