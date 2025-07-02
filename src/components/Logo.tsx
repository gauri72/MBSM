import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="image-zoom-container rounded-full">
        <Image 
          src="/images/logo.png" 
          alt="MBSM Trust Logo" 
          width={100} 
          height={100} 
          className="image-zoom rounded-full" 
        />
      </div>
    </div>
  );
} 