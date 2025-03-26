'use client';

import { useState } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen((prev) => !prev);

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='font-mono text-xl font-bold'>
            Craig Clayton
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <NavLink
              href='/about-me'
              activeClassName='underline text-blue-500'
              nonActiveClassName='text-gray-600 hover:text-blue-500'
              className='px-2 py-2 rounded-md transition-all duration-200'
            >
              About Me
            </NavLink>
            <NavLink
              href='/contact-me'
              activeClassName='underline text-blue-500'
              nonActiveClassName='text-gray-600 hover:text-blue-500'
              className='px-2 py-2 rounded-md transition-all duration-200'
            >
              Contact Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={handleClick}
              className='text-gray-300 focus:outline-none cursor-pointer'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {menuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-[rgba(10,10,10,0.9)]'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <NavLink
              href='/about-me'
              activeClassName='underline text-blue-500'
              nonActiveClassName='text-gray-600 hover:text-blue-500'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'
              handleClick={handleClick}
            >
              About Me
            </NavLink>
            <NavLink
              href='/contact-me'
              activeClassName='underline text-blue-500'
              nonActiveClassName='text-gray-600 hover:text-blue-500'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'
              handleClick={handleClick}
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
