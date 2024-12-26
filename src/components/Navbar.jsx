'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { navLinks } from '@/constants';
import { logo, menu, close } from '../../public/assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        paddingX w-full flex items-center py-5 fixed top-0 z-20 
        ${scrolled ? 'bg-primary' : 'bg-transparent'}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Erick Lema&nbsp;
            <span className="sm:block hidden"> | Data Scientist</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.title ? 'text-white' : 'text-secondary'} 
                hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          {/* Like button with heart icon */}
          <li
        className="flex items-center gap-2 cursor-pointer text-secondary hover:text-white"
        onClick={handleLikeClick}  // Toggle like state on click
      >
        {/* Conditionally render outline or solid heart based on liked state */}
        {liked ? (
          <FaHeart className="h-6 w-6 text-red-500" />
        ) : (
          <FaRegHeart className="h-6 w-6 text-red-500" />
        )}
      </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">

         <div className='flex justify-center items-center gap-3'>
            {/* Like button with heart icon */}
            <div
        className="flex items-center gap-2 cursor-pointer text-secondary hover:text-white"
        onClick={handleLikeClick}  // Toggle like state on click
      >
        {/* Conditionally render outline or solid heart based on liked state */}
        {liked ? (
          <FaHeart className="h-6 w-6 text-red-500" />
        ) : (
          <FaRegHeart className="h-6 w-6 text-red-500" />
        )}
      </div>

          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          
         </div>

          <div
            className={`
              ${!toggle ? 'hidden' : 'flex'}
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
            `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === nav.title ? 'text-white' : 'text-secondary'}
                  `}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
