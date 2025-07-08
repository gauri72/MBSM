"use client";

import Image from "next/image";
import { FaWhatsapp, FaStar } from "react-icons/fa";

const products = [
  {
    name: "Sacred Dhoop Sticks",
    image: "/images/essentials/dhoop-sticks.jpg",
    description: "Handcrafted dhoop sticks for ceremonial prayers and creating healing energy.",
    price: "₹699",
    rating: 5,
    bg: "bg-purple-100"
  },
  {
    name: "Premium Incense Sticks",
    image: "/images/essentials/incense-sticks.jpg",
    description: "Fragrant incense sticks made with all-natural ingredients for meditation and spiritual practice.",
    price: "₹299",
    rating: 5,
    bg: "bg-yellow-100"
  },
  {
    name: "Tibetan Singing Bowl",
    image: "/images/essentials/singing-bowl.jpg",
    description: "Authentic Tibetan singing bowl for sound healing and deep meditation.",
    price: "₹1,299",
    rating: 5,
    bg: "bg-blue-100"
  },
  {
    name: "Crystal Healing Set",
    image: "/images/essentials/crystal-set.jpg",
    description: "Curated collection of healing crystals for stability, energy, and protection.",
    price: "₹799",
    rating: 5,
    bg: "bg-pink-100"
  },
  {
    name: "Meditation Cushion",
    image: "/images/essentials/cushion.jpg",
    description: "Comfortable meditation cushion for long, peaceful sessions.",
    price: "₹999",
    rating: 5,
    bg: "bg-indigo-100"
  },
  {
    name: "Sage Smudge Bundle",
    image: "/images/essentials/smudge.jpg",
    description: "Pure sage bundle for spiritual cleansing and purification rituals.",
    price: "₹399",
    rating: 5,
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
              <div className="flex items-center justify-between mt-2 mb-2">
                <span className="text-base sm:text-lg font-bold text-white font-tiro-devanagari product-price-hover">{product.price}</span>
                <span className="flex items-center gap-1 product-stars-hover">
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className="text-yellow-400 text-base star-animation" 
                      style={{ animationDelay: `${(idx * 0.1) + (i * 0.1)}s` }}
                    />
                  ))}
                </span>
              </div>
              <button
                className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg shadow transition-colors duration-200 button-hover whatsapp-button-enhanced-hover"
                onClick={() => {
                  const msg = `Hello, I would like to order '${product.name}'. Please provide details.`;
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