"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
         ¡Hello, I'm<br />
         </div>
        <TypeAnimation
      sequence={[
        'Roni',
        1000,
        'Fullstack Developer',
        1000,
        'Automation Engineer',
        1000,
        'AI Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
    
      repeat={Infinity}
    />
        </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        Frontend & Fullstack Developer especializado en Node.js, React y Next.js.
      </p>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer">
          Hire Me
        </button>
        <button className="px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 mt-4 cursor-pointer">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
        </button>
      </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
          <Image
            src="/image/avatar.png"
            alt="Hero Image"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
