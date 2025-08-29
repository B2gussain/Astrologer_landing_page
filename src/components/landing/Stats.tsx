import React from 'react'
import { Star,Users ,Award,Globe  } from "lucide-react"; 

const Stats = () => {
  return (
    <section className='px-[20px] py-[80px] h-[100%] w-[100vw] gap-[30px] flex justify-center items-center flex-col'>
      <p className=' inline-flex p-[10px] text-[#8401a5] font-[500] rounded-[5px] gap-1 justify-center item-center text-[10px] md:text-[15px]   bg-[#fcc7fc]'><Star className="w-4 h-4 m-auto text-black" />Master Rajesh Sharma - Vedic Astrologer & Spritual Guide</p>
<h1 className="text-3xl md:text-5xl font-bold">
  Meet Your
  <span className="bg-gradient-to-bl from-[blue] to-[purple] bg-clip-text text-transparent">
    Cosmic Guide
  </span>
</h1>
<p className='md:w-[50%] text-center'>With over 15 years of experience in Vedic Astrology, I have dedicated my life to helping individuals discover their true potential through the ancient wisdom of the stars. My journey began in the sacred temples of India, where I studied under renowned masters of astrological sciences.</p>
<div className='flex gap-2 flex-wrap justify-center'>
  <p className='p-[10px] rounded-[10px] font-[500] text-[#d300d3]  bg-[#fcc7fc]'>15+ Years Experience</p>
  <p className='p-[10px] rounded-[10px] font-[500] text-[#002fff]  bg-[#c7d1fc]'>Certified Astrologer</p>
  <p className='p-[10px] rounded-[10px] font-[500] text-[#d8b804]  bg-[#fdff72]'>Vedic Expert</p>
</div>

<div className='flex justify-around mt-[30px] w-[70%] gap-2 flex-wrap'>
  <div className='flex flex-col justify-center items-center'>
    <Users className='text-[purple] bg-[#fcc7fc] h-[50px] w-[50px] p-[10px]' />
    <h3 className='font-bold text-[purple] text-2xl'>2000+</h3>
    <p>Happy Clients Guided</p>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <Award className='text-[#3700ff] bg-[#a8c6ff] h-[50px] w-[50px] p-[10px]' />
    <h3 className='font-bold text-[#1100ff] text-2xl'>4.9*</h3>
    <p>Average Rating</p>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <Globe  className='text-[#fc7a00] bg-[#fdff98] h-[50px] w-[50px] p-[10px]' />
    <h3 className='font-bold text-[#f79400] text-2xl'>25+</h3>
    <p>Countries Served</p>
  </div>




</div>




    </section>
  )
}

export default Stats