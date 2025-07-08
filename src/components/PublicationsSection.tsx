"use client";

import Image from "next/image";
import { FiBook, FiCalendar, FiGlobe, FiBookOpen } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PublicationsSection = () => {
  // WhatsApp order handler
  const handleWhatsAppOrder = () => {
    const message = `Hello, I would like to purchase a copy of 'Shree Shankar Mahima'. Please provide payment and delivery details.`;
    const url = `https://wa.me/917588797788?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="publications"
      className="bg-red-800 min-h-screen flex flex-col items-center justify-center py-16 px-2 sm:px-4"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        

        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .publications-header-animation {
          animation: slideInFromTop 1s ease-out;
        }
        
        .book-card-animation {
          animation: scaleIn 1s ease-out 0.3s both;
        }
        
        .book-image-animation {
          animation: fadeInLeft 0.8s ease-out 0.6s both;
        }
        
        .book-details-animation {
          animation: fadeInRight 0.8s ease-out 0.9s both;
        }
        
        .book-title-animation {
          animation: fadeInUp 0.6s ease-out 1.2s both;
        }
        
        .book-subtitle-animation {
          animation: fadeInUp 0.6s ease-out 1.4s both;
        }
        
        .book-description-animation {
          animation: fadeInUp 0.6s ease-out 1.6s both;
        }
        
        .features-animation {
          animation: fadeInUp 0.6s ease-out 1.8s both;
        }
        
        .price-button-animation {
          animation: fadeInUp 0.6s ease-out 2s both;
        }
        

        
        .card-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .image-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .image-hover:hover {
          transform: scale(1.05);
        }
        
        .button-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .button-hover:hover {
          animation: pulse 0.6s ease-in-out;
          transform: scale(1.05);
        }
        
        .feature-icon-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .feature-icon-hover:hover {
          animation: rotate 1s ease-in-out;
          transform: scale(1.2);
        }
        
        .price-shimmer {
          background: linear-gradient(90deg, #000 0%, #333 50%, #000 100%);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      <div className="mx-auto max-w-7xl w-full px-2 sm:px-4 md:px-8">
        <div className="text-center mb-10 publications-header-animation">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-tiro-devanagari text-white">
            Our Publications
          </h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-tiro-devanagari">
            <p>
              Discover wisdom through our carefully crafted spiritual literature, designed to guide you on your journey of self-discovery and enlightenment.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="relative flex justify-center items-center mb-12 book-card-animation">
          <div className="absolute inset-0 z-0 rounded-3xl bg-yellow-400 shadow-2xl card-hover" />
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch gap-y-6 sm:gap-y-8 lg:gap-y-0 lg:gap-x-6 p-4 sm:p-6 lg:p-0 overflow-hidden rounded-3xl" style={{ minHeight: '240px' }}>
            {/* Book Image Block */}
            <div className="flex flex-col items-stretch justify-stretch w-full lg:w-1/2 aspect-[4/3] lg:aspect-[4/3] p-0 group book-image-animation">
              <div className="relative w-full h-[250px] sm:h-[300px] lg:h-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Book Cover"
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 image-hover"
                  priority
                />
              </div>
            </div>
            {/* Book Details Block */}
            <div className="flex-1 min-w-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-0 lg:pr-8 lg:pt-8 bg-transparent overflow-x-auto book-details-animation">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-tiro-devanagari text-black mb-3 sm:mb-4 truncate book-title-animation">
                Shree Shankar Mahima
              </h3>
              <p className="text-base sm:text-lg lg:text-xl italic text-black font-tiro-devanagari mb-3 sm:mb-4 book-subtitle-animation">
                A Colorful Tale of Shree Shankar Maharaj for Children
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-black font-tiro-devanagari mb-5 sm:mb-6 book-description-animation">
                Shree Shankar Mahima is a beautifully illustrated book that brings the divine life of Shree Shankar Maharaj to children through engaging stories and vibrant visuals. Designed in an animated style, it introduces young readers to his miracles, values, and teachings in a simple and inspiring way.
              </p>
              {/* Features */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-4 mb-7 sm:mb-8 text-black text-sm sm:text-base lg:text-lg font-tiro-devanagari features-animation">
                <span className="flex items-center gap-1">
                  <FiBook className="inline-block align-middle text-black feature-icon-hover" size={18} />
                  82 Pages
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar className="inline-block align-middle text-black feature-icon-hover" size={18} />
                  2024 Edition
                </span>
                <span className="flex items-center gap-1">
                  <FiGlobe className="inline-block align-middle text-black feature-icon-hover" size={18} />
                  Marathi
                </span>
                <span className="flex items-center gap-1">
                  <FiBookOpen className="inline-block align-middle text-black feature-icon-hover" size={18} />
                  Hardcover
                </span>
              </div>
              {/* Price Row with WhatsApp Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 price-button-animation">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black font-tiro-devanagari">₹151</span>
                <button
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-base sm:text-lg shadow transition-colors duration-200 font-tiro-devanagari button-hover"
                  onClick={handleWhatsAppOrder}
                >
                  <FaWhatsapp className="inline-block align-middle text-white" size={22} />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection; 