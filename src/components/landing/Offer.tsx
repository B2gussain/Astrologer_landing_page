"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Offer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-09-20T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="h-auto w-[100vw] px-[20px] py-[50px] flex flex-col items-center gap-6  bg-[#fdfd86] mb-[60px]">
      <p className="mb-2 text-black inline-flex gap-2 justify-center items-center px-3 py-1 text-2xl font-medium">
        Join Our Webinar
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Limited-Time{" "}
        <span className="bg-gradient-to-br from-blue-500 to-[#08025a] bg-clip-text text-transparent">
          Offer!
        </span>
      </h1>

      <p className="max-w-xl text-center text-black">
        Get The Guide now and enjoy a special one-month free access to
        our upcoming AI-scoring platform with over 5000 test questions. Act fast
        – this offer expires soon!
      </p>

      <div className="flex  mt-6">
        <div className="bg-white shadow  px-4 py-2 text-center">
          <p className="text-2xl font-bold text-blue-600">{timeLeft.days}</p>
          <span className="text-gray-600 text-sm">Days</span>
        </div>
        <div className="bg-white shadow  px-4 py-2 text-center">
          <p className="text-2xl font-bold text-blue-600">{timeLeft.hours}</p>
          <span className="text-gray-600 text-sm">Hours</span>
        </div>
        <div className="bg-white shadow  px-4 py-2 text-center">
          <p className="text-2xl font-bold text-blue-600">{timeLeft.minutes}</p>
          <span className="text-gray-600 text-sm">Minutes</span>
        </div>
        <div className="bg-white shadow  px-4 py-2 text-center">
          <p className="text-2xl font-bold text-[black]">{timeLeft.seconds}</p>
          <span className="text-gray-600 text-sm">Seconds</span>
        </div>
      </div>

      <button className="mt-6 bg-[#510080] hover:bg-[#3f0063] text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg">
        <Calendar className="w-5 h-5" />
        Visit Now
      </button>
    </section>
  );
};

export default Offer;
