"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    name: "Dhoop Sticks",
    image: "/images/essentials/essentials-1.jpg",
    description: "Sacred dhoop sticks for spiritual purification and creating positive energy in your space.",
    bg: "bg-purple-100"
  },
  {
    name: "Incense Sticks",
    image: "/images/essentials/essentials-2.jpg",
    description: "Fragrant incense sticks for meditation, prayer, and spiritual ceremonies.",
    bg: "bg-yellow-100"
  },
  {
    name: "Sandal Wood",
    image: "/images/essentials/essentials-3.jpg",
    description: "Pure sandalwood for spiritual purification, meditation, and sacred rituals.",
    bg: "bg-blue-100"
  },
  {
    name: "Ashtagandha",
    image: "/images/essentials/essentials-4.jpg",
    description: "Sacred blend of eight aromatic herbs for spiritual protection and blessings.",
    bg: "bg-pink-100"
  },
  {
    name: "Camphor",
    image: "/images/essentials/essentials-5.jpg",
    description: "Pure camphor for aarti ceremonies and spiritual purification rituals.",
    bg: "bg-indigo-100"
  },
  {
    name: "Gulab Jal",
    image: "/images/essentials/essentials-6.jpg",
    description: "Sacred rose water for spiritual cleansing and divine blessings.",
    bg: "bg-yellow-100"
  }
];



const EssentialsSection = () => {
  return (
    <section id="essentials" className="w-full min-h-screen bg-yellow-400 py-12 px-2 sm:px-4">
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
        
        .essentials-header-animation {
          animation: slideInFromTop 1s ease-out;
        }
        
        .product-card-animation {
          animation: scaleIn 0.6s ease-out both;
        }
        
        .product-card-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        

        
        .product-image-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-image-hover:hover {
          transform: scale(1.1);
        }
        
        .product-image-zoom {
          transition: transform 0.3s ease-in-out;
          overflow: hidden;
          border-radius: 0.75rem;
        }
        
        .product-image-zoom:hover img {
          transform: scale(1.1);
        }
        
        .button-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .button-hover:hover {
          animation: pulse 0.6s ease-in-out;
          transform: scale(1.05);
        }
        
        .star-animation {
          animation: bounce 0.6s ease-in-out;
        }
        
        .price-shimmer {
          background: linear-gradient(90deg, #fff 0%, #f0f0f0 50%, #fff 100%);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        
        .stagger-animation {
          animation-delay: calc(var(--animation-order) * 0.1s);
        }
        
        .essentials-header-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .essentials-header-hover:hover {
          transform: scale(1.02);
        }
        
        .product-title-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-title-hover:hover {
          color: #fbbf24;
          transform: scale(1.05);
        }
        
        .product-description-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-description-hover:hover {
          color: #f3f4f6;
          transform: scale(1.02);
        }
        
        .product-price-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-price-hover:hover {
          color: #fbbf24;
          transform: scale(1.1);
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
        
        .product-stars-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .product-stars-hover:hover {
          transform: scale(1.1);
        }
        
        .product-stars-hover:hover .star-animation {
          animation: rotate 0.6s ease-in-out;
        }
        
        .product-card-enhanced-hover {
          transition: all 0.4s ease-in-out;
          position: relative;
        }
        
        .product-card-enhanced-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(220, 38, 38, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          border-radius: 1rem;
        }
        
        .product-card-enhanced-hover:hover::before {
          opacity: 1;
        }
        
        .product-card-enhanced-hover:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        
        .whatsapp-button-enhanced-hover {
          transition: all 0.3s ease-in-out;
          position: relative;
          overflow: hidden;
        }
        
        .whatsapp-button-enhanced-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }
        
        .whatsapp-button-enhanced-hover:hover::before {
          left: 100%;
        }
        
        .whatsapp-button-enhanced-hover:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 essentials-header-animation essentials-header-hover">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-tiro-devanagari mb-2">Spiritual Essentials</h2>
          <div className="text-lg sm:text-xl text-black/80 font-tiro-devanagari mb-2">Sacred tools to enhance your spiritual journey</div>
        </div>
        
        {/* New Content Section - Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 items-center">
          {/* Left Column - Text Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl h-[650px] card-hover flex items-center justify-center relative overflow-hidden border-2 border-yellow-400/20">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
              <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400/5 rounded-full blur-lg"></div>
              
              <div className="space-y-6 text-center relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-tiro-devanagari mb-2 drop-shadow-lg">
                    Discover Sacred Essentials
                  </h3>
                  <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-white/95 font-tiro-devanagari leading-relaxed drop-shadow-sm">
                  Our carefully curated collection of spiritual essentials includes traditional items used in daily worship, meditation, and sacred ceremonies. Each product is sourced with devotion and quality in mind, helping you create a sacred space for your spiritual practices.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/85 font-tiro-devanagari leading-relaxed drop-shadow-sm">
                  From fragrant incense sticks to pure sandalwood, from sacred dhoop to blessed gulab jal, our essentials support your journey towards inner peace and spiritual growth. These traditional items have been used for centuries in spiritual practices and continue to bring divine blessings to homes and temples.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/85 font-tiro-devanagari leading-relaxed drop-shadow-sm">
                  Experience the divine fragrance and sacred energy that these essentials bring to your spiritual space. Transform your home into a temple of peace, devotion, and spiritual growth with our authentic spiritual products.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl h-[650px] rounded-3xl overflow-hidden shadow-2xl image-hover group">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/30 pointer-events-none"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50 rounded-bl-lg"></div>
              
              <Image
                src="/images/shop.jpg"
                alt="Spiritual Essentials Shop"
                fill
                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                priority
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl shadow-lg p-5 flex flex-col bg-red-800 product-card-animation product-card-hover product-card-enhanced-hover"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-full h-40 sm:h-44 md:h-48 mb-4 flex items-center justify-center product-image-zoom">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={120} 
                  height={120} 
                  className="object-contain w-auto h-full rounded-xl" 
                  style={{ transition: 'transform 0.3s ease-in-out' }}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white font-tiro-devanagari mb-1 product-title-hover">{product.name}</h4>
              <div className="text-sm sm:text-base text-white/90 font-tiro-devanagari mb-2 flex-1 product-description-hover">{product.description}</div>
              <button
                className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg shadow transition-colors duration-200 button-hover whatsapp-button-enhanced-hover"
                onClick={() => {
                  const msg = `Namaste! 🙏 I would like to order ${product.name} from MBSM Trust. Please provide pricing and availability details. Thank you!`;
                  window.open(`https://wa.me/917588797788?text=${encodeURIComponent(msg)}`, '_blank');
                }}
              >
                <FaWhatsapp className="text-white text-lg" />
                Order via WhatsApp
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EssentialsSection; 