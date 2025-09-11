// pages/index.tsx
import Image from 'next/image';
import { heroSectionImage, PROPERTYLISTINGSAMPLE } from '../constants';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';


export default function Home() {
  return (
    <>
      <section className="mx-10 mt-10"> {/* Added mt-10 */}
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

      {/* Listing Section */}
      <section className="px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-10 bg-white">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <Card key={idx}>
            <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                priority={idx === 0}
              />
            </div>
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-sm text-gray-600">
              {property.address.city}, {property.address.state},{" "}
              {property.address.country}
            </p>
            <p className="mt-1 text-sm">Rating: ⭐ {property.rating}</p>
            <p className="font-semibold mt-1">${property.price}</p>
            <Button className="mt-3">Book Now</Button>
          </Card>
        ))}
      </section>
    </>
  );
}