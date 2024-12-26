'use client';

import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-gray-400 text-[12px]'>{designation} at {company}</p>
        </div>
        <img src={image} alt={`feedback by ${name}`} className='w-10 h-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
