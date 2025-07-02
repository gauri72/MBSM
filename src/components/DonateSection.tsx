import Image from 'next/image';

const DonateSection = () => {
  return (
    <section id="donate" className="w-full min-h-screen bg-[#8B0000] py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 mt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Donate Us</h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            <p className="mb-4">Your generous contribution helps us continue our spiritual mission and serve the community.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* First: Square Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
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
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-yellow-400 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[250px] sm:max-w-[300px] rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/donate/qr-code.png"
                alt="Donation QR Code"
                fill
                className="image-zoom object-contain"
                sizes="(max-width: 768px) 250px, 300px"
              />
            </div>
              <p className="text-black text-center mt-6 text-base sm:text-lg font-semibold">
              Scan to donate securely
            </p>
            </div>
          </div>

          {/* Third: Square Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
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