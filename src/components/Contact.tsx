import React, { FormEvent, useState } from 'react';
import { Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    budget: '',
    details: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `New Booking Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Event Details:
-------------
Event Type: ${formData.eventType}
Date: ${formData.eventDate}
Guest Count: ${formData.guestCount}
Location: ${formData.location}
Budget Range: ${formData.budget}

Additional Details:
${formData.details}
    `.trim();

    window.location.href = `mailto:tj_childs26@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16">Book with Sip Society</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">Name*</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">Phone Number*</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light" 
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">Event Type*</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">Event Date*</label>
                    <input 
                      type="date" 
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light [color-scheme:dark]" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">Guest Count*</label>
                    <input 
                      type="number" 
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">Event Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Venue or Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light" 
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-light mb-2">Budget Range*</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light"
                >
                  <option value="">Select budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                  <option value="$2,000 - $3,000">$2,000 - $3,000</option>
                  <option value="$3,000+">$3,000+</option>
                </select>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-light mb-2">Additional Details</label>
                <textarea 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell us more about your event, special requests, or questions..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-dark/50 text-light"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#C4A028] transition"
              >
                Send Inquiry
              </button>
              <p className="text-light/60 text-sm text-center">* Required fields</p>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#D4AF37] mr-3" />
                  <span>Available 7 days a week, 9AM - 9PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mr-3" />
                  <span>Serving the Charlotte Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
