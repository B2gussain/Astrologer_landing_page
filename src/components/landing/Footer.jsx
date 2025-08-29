import React from 'react'
import {CircleDotDashed,Facebook,Linkedin,Instagram ,Youtube  } from "lucide-react"; 
const Footer = () => {
  return (
    <footer className='mb-[-25px]   bg-[#141212]'>
    <div className='h-[100%]  p-[30px] flex-wrap flex flex-row   w-[100vw]'>
      <div className='md:w-[25%] w-[100%] flex flex-col   gap-3 p-[10px]'>
        <h2 className='flex text-white font-bold gap-2'><CircleDotDashed className='text-[green]' />Pipepro</h2>
        <p className='text-[#ffffff56]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eius voluptate ut veritatis iusto, a tempora maiores perspiciatis</p>
        <div className='flex text-white gap-2'>
          <Facebook className='h-[40px] w-[40px] rounded-full p-2 bg-[#272626da]' />
          <Linkedin className='h-[40px] w-[40px] rounded-full p-2 bg-[#272626da]' />
          <Instagram className='h-[40px] w-[40px] rounded-full p-2 bg-[#272626da]' />
          <Youtube className='h-[40px] w-[40px] rounded-full p-2 bg-[#272626da]' />
        </div>
      </div>
      <div className='md:w-[25%] w-[100%] flex flex-col   gap-3 p-[10px]'>
        <h2 className='flex text-white font-bold'>Services</h2>
       <ul className='flex flex-col text-[#ffffff56]'>
        <li >Drip DEtectives</li>
        <li>Leak Stop Specialists</li>
        <li>Pipe Dream Team</li>
        <li>Rapid Repair Squard</li>
        <li>Clear Flow Plumbers</li>
       </ul>
      </div>
       <div className='md:w-[25%] w-[100%] flex flex-col   gap-3 p-[10px]'>
        <h2 className='flex text-white font-bold'>Quick Links</h2>
         <ul className='flex flex-col text-[#ffffff56]'>
        <li >About Us</li>
        <li>Blog</li>
        <li>Testimonials</li>
        <li>Faqs</li>
        <li>Contact Us</li>
       </ul>
      </div>
      <div className='md:w-[25%] w-[100%] flex flex-col   gap-3 p-[10px]'>
        <h2 className='flex text-white font-bold'>Contact Info</h2>
       
        <div className='flex text-white items-center gap-2'>
          <div className='h-[40px] w-[40px] rounded-full bg-[#242323]'></div>
          <div className='flex flex-col'>
            <h2>Call Now</h2>
            <h2>+125 (895)658 568</h2>
          </div>
        </div>
         <div className='flex text-white items-center gap-2'>
          <div className='h-[40px] w-[40px] rounded-full bg-[#242323]'></div>
          <div className='flex flex-col'>
            <h2>Office Address</h2>
            <h2>66 Broklyant,New India</h2>
          </div>
        </div>
      </div>
      </div>
      <div className=' flex-wrap w-[100vw] border-t-2  text-[#ffffff63] flex justify-between p-[20px] border-[#8080803b]'>

        <p>Pipepro 2024 | All Rights Reserved</p>
        <div className='flex-wrap md:px-[20px] flex gap-[20px]'>
          <p>Privacy & Policy</p>
          <p>Terms and Conditions</p>
          
               </div>


      </div>




      </footer>
  )
}

export default Footer