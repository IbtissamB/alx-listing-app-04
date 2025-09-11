// pages/index.tsx
import Image from 'next/image';
import { heroSectionImage, PROPERTYLISTINGSAMPLE, filters } from '../constants';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Pill from '@/components/common/Pill';


export default function Home() {
  return (
    <main>
      <section className="mx-10 mt-6"> {/* Added mt-10 */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden"> {/* Added rounded-full */}
          {/* Background image with overlay */}
          <div className="absolute inset-0  overflow-hidden"> {/* Added rounded-full and overflow-hidden */}
            <Image 
              src={heroSectionImage} 
              alt="Scenic mountain and lake" 
              layout="fill" 
              objectFit="cover" 
              quality={100}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl leading-tight max-w-2xl">
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-4">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </section>
      {/* Filter Section */}
      <section className="flex flex-wrap gap-3 justify-left px-4 py-6 bg-white font-semibold">
        {filters.map((label, index) => (
          <Pill 
            key={index} 
            label={label} 
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-10 bg-white">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <Card key={idx}>
            <div className="border shadow-md border-gray-300 relative w-full h-52 rounded-lg overflow-hidden mb-4">
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                priority={idx === 0}
              />
            </div>

            <div className='flex justify-between items-center'>
              <h2 className="text-md lg:text-lg font-semibold">{property.name}</h2>
              <p className="mt-1 text-sm">⭐ {property.rating}</p>
            </div>
            
            <p className="text-sm font-semibold text-gray-600">
              {property.address.city}, {property.address.state},{" "}
              {property.address.country}
            </p>
            <p className="font-semibold mt-1 text-right">${property.price}/n</p>
          </Card>
        ))}
      </section>
    </main>
  );
}