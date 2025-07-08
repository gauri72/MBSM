import Image from 'next/image';

const DonateSection = () => {
  return (
    <section id="donate" className="w-full min-h-screen bg-[#8B0000] py-12 sm:py-16 px-4 sm:px-8">
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
        
        .donate-header-animation {
          animation: slideInFromTop 1s ease-out;
        }
        
        .donate-left-animation {
          animation: fadeInLeft 0.8s ease-out 0.3s both;
        }
        
        .donate-center-animation {
          animation: scaleIn 0.8s ease-out 0.6s both;
        }
        
        .donate-right-animation {
          animation: fadeInRight 0.8s ease-out 0.9s both;
        }
        

        
        .qr-card-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .qr-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .image-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .image-hover:hover {
          transform: scale(1.05);
        }
        
        .qr-code-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .text-bounce {
          animation: bounce 1s ease-in-out 1.2s both;
        }
      `}</style>
      <div className="max-w-7xl mx-auto md:flex md:flex-col md:justify-center md:min-h-[calc(100vh-56px)]">
        <div className="text-center mb-8 sm:mb-12 mt-4 donate-header-animation">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Donate Us</h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            <p className="mb-4">Your generous contribution helps us continue our spiritual mission and serve the community.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* First: Square Image */}
          <div className="flex justify-center items-center donate-left-animation">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl image-hover">
                <Image
                src="/donate/donate-image-1.jpg"
                alt="Donate Section Image 1"
                  fill
                className="image-zoom object-cover"
                priority
                />
              </div>
          </div>

          {/* Second: QR Code Card */}
          <div className="flex justify-center items-center donate-center-animation">
            <div className="w-full max-w-md bg-yellow-400 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center qr-card-hover">
              <div className="relative w-full aspect-square max-w-[250px] sm:max-w-[300px] rounded-xl overflow-hidden shadow-md bg-white qr-code-pulse">
              <Image
                src="/donate/qr-code.png"
                alt="Donation QR Code"
                fill
                className="image-zoom object-contain"
                sizes="(max-width: 768px) 250px, 300px"
              />
            </div>
              <p className="text-black text-center mt-6 text-base sm:text-lg font-semibold text-bounce">
              Scan to donate securely
            </p>
            </div>
          </div>

          {/* Third: Square Image */}
          <div className="flex justify-center items-center donate-right-animation">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl image-hover">
              <Image
                src="/donate/donate-image-2.jpg"
                alt="Donate Section Image 2"
                fill
                className="image-zoom object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection; 