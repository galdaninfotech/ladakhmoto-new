import { Marquee } from "@/components/shadcn-space/animations/marquee";
import React from 'react';

type BrandList = {
  image: string;
  name: string;
};

export default function Accrediations() {
  const brandList: BrandList[] = [
    {
      image: "/images/accrediations/asta.png",
      name: "asta",
    },
    {
      image: "/images/accrediations/iata.png",
      name: "iata",
    },
    {
      image: "/images/accrediations/iato.png",
      name: "iato",
    },
    {
      image: "/images/accrediations/imf.png",
      name: "imf",
    },
    {
      image: "/images/accrediations/mt.png",
      name: "mt",
    },
    {
      image: "/images/accrediations/qmsc.png",
      name: "qmsc",
    },
    {
      image: "/images/accrediations/taai.png",
      name: "taai",
    },
    {
      image: "/images/accrediations/tafi.png",
      name: "tafi",
    },
  ];

  return (
    <section className="container mx-auto bg-background dark:bg-background relative z-10">      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-14">
        <Marquee className="[--duration:40s] gap-2" pauseOnHover>
          {brandList.map((brand, index) => (
            <div key={index} className="flex items-center justify-center px-4 md:px-8 min-w-[70px]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-16 md:w-25 h-auto opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
              />
            </div>
          ))}
        </Marquee>
        
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
