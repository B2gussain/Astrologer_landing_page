"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  feedback: string;
  imageUrl: string;
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data: Testimonial[] = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestimonials();
  }, []);
  

  return (
    <section className="h-[100%] flex flex-col items-center gap-6 px-6 py-12 w-[100vw] bg-white">
      <p className="mb-2 text-[#8401a5] rounded-md bg-[#efdffc] inline-flex gap-2 justify-center items-center px-3 py-1 text-sm font-medium">
        <Star className="w-4 h-4 text-black" />
        Astrologer Testimonials
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-center">
        What Our Clients{" "}
        <span className="bg-gradient-to-bl from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Say About Us
        </span>
      </h1>

      <p className="max-w-xl text-center text-gray-500">
        Discover how our astrological guidance has transformed lives across the
        globe, bringing clarity, purpose, and positive change to thousands of
        satisfied clients.
      </p>

      <div className="w-full md:w-[70%] mt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white   rounded-2xl relative flex flex-col items-center text-center h-full transition hover:shadow-lg">
                <img src={item.imageUrl } alt={item.name} className="w-[400px] h-[400px] rounded-[5px] object-cover mb-4 " />
                <h3 className="absolute left-[10px] top-[10px] text-lg font-semibold text-[white]">
                  {item.name}
                </h3>
                <p className=" absolute bottom-[5px] px-[5px] py-[10px] bg-[#00000049]  text-white italic mb-3">{item.feedback}</p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
