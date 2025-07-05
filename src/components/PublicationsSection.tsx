'use client';

import { useState } from 'react';
import Image from 'next/image';

const PublicationsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the message text
    const messageText = `*Book Purchase Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuantity: ${formData.quantity}\nAddress: ${formData.address}\n\nI would like to purchase the book. Please provide payment details.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Create WhatsApp URL with the phone number and message
    const whatsappUrl = `https://wa.me/917588797788?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      quantity: '1',
      address: ''
    });
  };

  return (
    <section id="publications" className="bg-red-800 min-h-screen flex items-center justify-center py-6 sm:py-8 relative z-0">
      <div className="absolute top-0 left-0 w-full h-8 bg-spiritual-orange transform skew-y-3 origin-top-left -translate-y-full" style={{ 
        WebkitTransform: 'skewY(3deg) translateY(-100%)',
        transform: 'skewY(3deg) translateY(-100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-spiritual-orange transform -skew-y-3 origin-bottom-left translate-y-full" style={{ 
        WebkitTransform: 'skewY(-3deg) translateY(100%)',
        transform: 'skewY(-3deg) translateY(100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-tiro-devanagari text-white">
            Our Publications
          </h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-tiro-devanagari">
            <p>Nurturing Souls Through the Power of Words</p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 items-stretch">
          {/* First Column - Cover Image */}
          <div className="lg:col-span-1 flex flex-col mb-6 lg:mb-0">
            <div className="rounded-lg shadow-xl overflow-hidden flex-grow h-[400px] sm:h-[500px]">
              <Image
                src="/images/book-cover.jpg"
                alt="Book Cover"
                width={400}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Second Column - Purchase Form */}
          <div className="lg:col-span-2 flex flex-col mt-6 lg:mt-0">
            <div className="bg-yellow-400 p-4 sm:p-6 rounded-lg shadow-xl flex-grow flex flex-col">
              <h3 className="text-black text-lg sm:text-xl font-bold mb-4">Purchase Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-red-800"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-red-800"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-red-800"
                    required
                  />
                </div>
                <div>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-red-800"
                    required
                  >
                    <option value="1">1 Copy</option>
                    <option value="2">2 Copies</option>
                    <option value="3">3 Copies</option>
                    <option value="4">4 Copies</option>
                    <option value="5">5 Copies</option>
                    <option value="more">More than 5</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Delivery Address"
                    rows={3}
                    className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-red-800"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-block border-2 border-black px-4 py-2.5 text-sm sm:text-base font-semibold bg-yellow-400 text-black hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                  >
                    Purchase via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection; 