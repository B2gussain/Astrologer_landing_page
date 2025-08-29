import React from 'react'
import { Star } from "lucide-react"
const Services = () => {
  return (
    <section className=' flex flex-col gap-[20px] px-[20px] py-[50px] items-center w-[100vw] h-[100%] bg-[#fdfd86]'>
      <p className="mb-2 text-[#8401a5] rounded-[5px] bg-[#efdffc] inline-flex gap-2 justify-center items-center w-[230px] px-[10px] py-[5px]"><Star className="w-4 h-4 text-black" />Astrologer Services</p>
      <h1 className="text-3xl md:text-4xl font-bold">
        Comprehensive
        <span className="bg-gradient-to-bl from-[blue] to-[purple] bg-clip-text text-transparent">
          {" "}Cosmic Services
        </span>
      </h1>
      <p className='md:w-[45%] text-center text-[grey]'>Discover a wide range of astrological services designed to illuminate your path,enhance your well-being,and guide you towards your highest potential.</p>


     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
  <div className='gap-2 p-[20px] border-[1px] border-[#ff8800a1] h-[200px] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#ff8800] rounded-[5px]'></div>
    <h1 className='font-[500]'>Birth Chart Reading</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] h-[200px] border-[1px] border-[#ff0077a1] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#ff0077] rounded-[5px]'></div>
    <h1 className='font-[500]'>Love & Relationships</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] h-[200px] border-[1px] border-[#0011ff70] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#0011ff] rounded-[5px]'></div>
    <h1 className='font-[500]'>Career Guidance</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] h-[200px] border-[1px] border-[#cc00ffa1] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#a200ff] rounded-[5px]'></div>
    <h1 className='font-[500]'>Vedic Astrology</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] border-[1px] border-[#00c70a93] h-[200px] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#07d100] rounded-[5px]'></div>
    <h1 className='font-[500]'>Vastu Consultation</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] h-[200px] border-[1px] border-[#ae00ff70] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#5300a1] rounded-[5px]'></div>
    <h1 className='font-[500]'>Gemstone Therapy</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] h-[200px] border-[1px] border-[#02ffea70] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#00ffbf] rounded-[5px]'></div>
    <h1 className='font-[500]'>Muhurat Selection</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>

  <div className='gap-2 p-[20px] border-[1px] border-[#ff8800a1] h-[200px] w-[200px] bg-[#ffffff9f] rounded-[10px] flex flex-col justify-center items-center'>
    <div className='h-[20px] w-[20px] bg-[#ff8800] rounded-[5px]'></div>
    <h1 className='font-[500]'>Spritual Guidance</h1>
    <p className='text-center text-[13px]'>Complete natal chart analysis revealing your personality,strengths.</p>
  </div>
</div>
    </section>
  )
}

export default Services