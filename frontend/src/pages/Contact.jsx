import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-900 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col gap-6 md:flex-row justify-center text-sm mb-28 text-gray-600'>
        <img className='w-full max-w-[300px]' src={assets.contact_image} alt='contact' />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 text-sm'>1234 Street Name, City, State, 12345 <br />Phone: (123) 456-7890</p>
          <p className='text-gray-500 text-sm'>Website:Email: abcxyz@gmail.com <br/>Website: www.example.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO </p>
          <p className='text-gray-500'>Learn More About team and job opening</p>
          <button className='border border-gray-600 px-6 md:px-8 py-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
