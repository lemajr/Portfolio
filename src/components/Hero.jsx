'use client'

import { motion } from "framer-motion";
import Statistics  from "./statistics";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-between `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`heroHeadText text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Lemajr</span>
          </h1>
          <p className={`heroSubText mt-2 text-white-100`}>
            I design & develop models, user 
             <br className='sm:block hidden' />
            interfaces, and software applications.
          </p>
        </div>
      </div>
          <div className="absolute inset-0 bottom-4 top-[120px]  max-w-7xl mx-auto paddingX  flex justify-center items-center ">
                  <Statistics />

          </div>
      <div className='absolute xs:bottom-2 bottom-10 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 rotate-90'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
