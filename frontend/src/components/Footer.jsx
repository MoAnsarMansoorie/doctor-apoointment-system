import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
              
              {/* ---------------Left section--------- */}
              <div>
                  <img className='mb-5 w-40' src={assets.logo} alt='' />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iste, distinctio eos maiores error eveniet excepturi facilis accusamus exercitationem odit itaque facere minima laborum dicta quod inventore labore dolores fuga.</p>
              </div>

              {/* --------------Center section---------- */}
              <div>
                  <p className='text-xl font-medium mb-5'>Company</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Contact Us</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>

              {/* -------------Right section------------ */}
              <div>
                  <p className='text-xl font-medium mb-5'>Get In Touch</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                      <li>+91 99999999999</li>
                      <li>xyzabc@gmail.com</li>
                  </ul>
              </div>

          </div>
          

          {/* ---------------copyright text--------------- */}
          <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright 2025@prescripto - All right reserved</p>
          </div>
    </div>
  );
}

export default Footer;
