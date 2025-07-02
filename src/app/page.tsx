'use client';

import Image from 'next/image';
import { useState } from 'react';
import DonateSection from '../components/DonateSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import AIChatWidget from '@/components/AIChatWidget';
import { FaSearch, FaHandHoldingHeart, FaChevronDown, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the message text
    const messageText = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Create WhatsApp URL with the phone number and message
    const whatsappUrl = `https://wa.me/919307256369?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Scroll handler for hero buttons
  const scrollToSection = (sectionId: string) => {
    const navbar = document.querySelector('header');
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = navbar ? navbar.getBoundingClientRect().height : 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-yellow-400 min-h-screen pt-[calc(48px+96px)] sm:pt-[calc(48px+80px)] lg:pt-[calc(56px+120px)] pb-4 sm:pb-6 lg:pb-8 relative z-0" id="hero">
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
        <div className="w-full px-3 sm:px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-4 items-center">
            {/* First Column - Main Card */}
            <div className="lg:col-span-1 flex flex-col items-center text-gray-900 text-center mb-6 lg:mb-0 h-full">
              <div className="bg-red-800 p-4 sm:p-6 lg:p-8 rounded-lg text-white text-center w-full max-w-md flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 font-tiro-devanagari">
                  MANGAL<br />BHAKT<br />SEVA<br />MANDAL
                </h1>
                <p className="mt-2 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl lg:text-3xl leading-8 whitespace-nowrap font-tiro-devanagari">
                  Where there&apos;s less,<br />We give our best.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-red-800 font-semibold px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-3 rounded-full shadow hover:bg-yellow-500 transition-colors duration-200 font-tiro-devanagari text-sm sm:text-base lg:text-lg"
                >
                  <FaChevronDown className="text-base sm:text-lg lg:text-xl" />
                  Show More
                </button>
              </div>
            </div>

            {/* Second Column - Our Programs Block */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center mt-4 lg:mt-0">
              <div className="bg-red-800 p-4 sm:p-6 lg:p-8 rounded-lg text-white text-center w-full max-w-md mb-4 flex flex-col items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-tiro-devanagari">Our Programs</h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-tiro-devanagari">Explore paths to grow, serve, and heal</p>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-yellow-400 text-red-800 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:bg-yellow-500 transition-colors duration-200 font-tiro-devanagari text-sm sm:text-base"
                >
                  <FaSearch className="text-base sm:text-lg" />
                  Browse Programs
                </button>
              </div>
              <div className="w-full max-w-md image-zoom-container rounded-lg shadow-lg">
                <Image
                  src="/images/hero-image-1.jpg"
                  alt="Our Programs Image"
                  width={400}
                  height={450}
                  className="image-zoom object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
                  priority
                />
              </div>
            </div>

            {/* Third Column - Give with Grace Block */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center mt-4 lg:mt-0">
              <div className="w-full max-w-md mb-4 image-zoom-container rounded-lg shadow-lg">
                <Image
                  src="/images/hero-image-2.jpg"
                  alt="Donate Image"
                  width={400}
                  height={450}
                  className="image-zoom object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] object-top"
                  priority
                />
              </div>
              <div className="bg-red-800 p-4 sm:p-6 lg:p-8 rounded-lg text-white text-center w-full max-w-md flex flex-col items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-tiro-devanagari">Give with Grace</h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-tiro-devanagari">Your gift brings light and hope</p>
                <button
                  type="button"
                  onClick={() => scrollToSection('donate')}
                  className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-yellow-400 text-red-800 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:bg-yellow-500 transition-colors duration-200 font-tiro-devanagari text-sm sm:text-base"
                >
                  <FaHandHoldingHeart className="text-base sm:text-lg" />
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Donate Section */}
      <DonateSection />

      {/* Contact Us Section */}
      <div className="bg-yellow-400 min-h-screen flex items-center justify-center py-6 sm:py-8 relative z-0" id="contact">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-tiro-devanagari">
              Contact Us
            </h2>
            <div className="text-lg sm:text-xl text-black/90 max-w-2xl mx-auto font-tiro-devanagari">
              <p>We&apos;d love to hear from you! Reach out for collaborations, questions, or to join our mission.</p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 items-stretch">
            {/* First Column - Map */}
            <div className="lg:col-span-1 flex flex-col mb-6 lg:mb-0">
              <div className="rounded-lg shadow-xl overflow-hidden flex-grow border-4 border-red-800 h-[250px] sm:h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120608.77265617563!2d74.60523358220844!3d19.15042033735744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bdcbb9817257a8d%3A0xcaef67855acfc041!2sF.70%2C%20MIDC%2C%20Ahmadnagar%2C%20Maharashtra%20414111!3m2!1d19.150436799999998!2d74.6876444!5e0!3m2!1sen!2sin!4v1749726249223!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Contact Info Card */}
              <div className="bg-red-800 text-white rounded-lg shadow-lg p-4 sm:p-6 mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-yellow-400 text-red-800 rounded-full p-2">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </span>
                  <span className="text-sm sm:text-base">F.70, MIDC, Ahmadnagar, Maharashtra 414111</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-yellow-400 text-red-800 rounded-full p-2">
                    <FaEnvelope className="h-5 w-5" />
                  </span>
                  <span className="text-sm sm:text-base">mbsmtrust@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-yellow-400 text-red-800 rounded-full p-2">
                    <FaPhone className="h-5 w-5" />
                  </span>
                  <span className="text-sm sm:text-base">+91 9422226825</span>
                </div>
              </div>
            </div>

            {/* Second Column - Form */}
            <div className="lg:col-span-2 flex flex-col mt-6 lg:mt-0">
              <div className="bg-red-800 p-4 sm:p-6 rounded-lg shadow-xl flex-grow flex flex-col">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-4">Send a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-spiritual-orange"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-spiritual-orange"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-spiritual-orange"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={4}
                      className="w-full p-2.5 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-spiritual-orange"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-block border-2 border-white px-4 py-2.5 text-sm sm:text-base font-semibold bg-spiritual-black text-white hover:bg-white hover:text-red-800 transition-colors duration-200 rounded-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AIChatWidget />
    </>
  );
}
