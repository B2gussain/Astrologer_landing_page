"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroData } from "@/lib/types";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react"; 

const Hero = () => {
  const [hero, setHero] = useState<HeroData | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-5 h-5 text-yellow-500" />;
      case "ThumbsUp":
        return <ThumbsUp className="w-5 h-5 text-blue-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => setHero(data))
      .catch(() => setHero(null));
  }, []);

  if (!hero) return <p className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#fdfd86]">Loading...</p>;

  return (
    <section className="md:p-[50px] p-[20px] bg-[#fdfd86] h-[100%] w-[100vw]">
      <div className="flex md:flex-row flex-col-reverse justify-around w-full h-auto px-[20px]   md:px-[50px] py-[80px]">
        <div className="md:w-[50%] ">
          <p className="mb-2 text-[#8401a5] rounded-[5px] bg-[#efdffc] inline-flex gap-2 justify-center items-center w-[230px] px-[10px] py-[5px]"><Star className="w-4 h-4 text-black" />Certified Vedic Astrologer</p>
          <h1 className="md:text-5xl text-4xl font-bold">{hero.title}</h1>
          <p className="mt-2 mb-8">{hero.subtitle}</p>
          <a
            href={hero.ctaLink}
            className="bg-[#6e00c9] text-white font-bold px-8 py-4 rounded-lg"
          >
            {hero.ctaText}
          </a>
          <div className="flex gap-[50px] justify-start flex-wrap mt-[50px]">
            <div className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-1"> <div className="h-[30px] w-[30px] rounded-[4px] bg-[#5e00ac]"></div>
              <h2 className="text-[#5e00ac] text-3xl font-bold">1B+</h2></div>
              <h2 className="font-bold md:text-[13px]  text-[10px]">Followers social media</h2>
            </div>
             <div  className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-1"> <div className="h-[30px] w-[30px] rounded-[4px] bg-[#5e00ac]"></div>
              <h2 className="text-[#5e00ac] text-3xl font-bold">800k</h2></div>
              <h2 className="font-bold  md:text-[13px]  text-[10px]">Registration booked</h2>
            </div>
             <div  className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-1"> <div className="h-[30px] w-[30px] rounded-[4px] bg-[#5e00ac]"></div>
              <h2 className="text-[#5e00ac] text-3xl font-bold">25y</h2></div>
              <h2 className="font-bold md:text-[13px]  text-[10px]">Year of experience</h2>
            </div>
          </div>
        </div>
        <div className="mt-[-90px] flex justify-center p-[20px] md:border-[1px] border-[#00a2ff] rounded-full">
          <Image
            src={hero.imageUrl}
            alt="Astrologer"
            width={260}
            height={260}
            className="rounded-full"
          />
        </div>
      </div>
         <div className="flex gap-4 items-center justify-center  flex-wrap">
            {hero.badges.map((badge, index) => (
              <div
                key={index}
                className="flex   items-center gap-2 px-10 py-6 md:bg-white md:shadow rounded-lg"
              >
                {getIcon(badge.icon)}
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
      
    </section>
  );
};

export default Hero;
