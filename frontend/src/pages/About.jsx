import React from 'react';
import {assets} from "../assets/assets.js"

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        ABOUT <span className='text-gray-700 font-medium'>US</span>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full max-w-[300px]' src={assets.about_image} />

        <div className='flex flex-col gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit impedit, quo similique earum temporibus officiis fugit assumenda veritatis et ab omnis, nostrum accusamus accusantium blanditiis sed id natus ad.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde odio, natus error commodi soluta reiciendis voluptates nisi animi, in veritatis facere possimus quae eum, incidunt magnam placeat dolor architecto temporibus. Numquam corrupti, obcaecati ratione omnis consequatur delectus fugit eum!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa pariatur obcaecati perferendis repellat. At, magnam sunt rerum itaque voluptas perferendis vero, molestias quo voluptates dolore minus reiciendis. Enim ut inventore rem architecto ullam iure?</p>
        </div>
      </div>

      <div className='text-xl my-4 text-gray-700'>
        <p>WHY <span className='text-gray-900 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border border-gray-400 px-6 md:px-10 py-8 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione accusantium nesciunt </p>
        </div>

        <div className='border border-gray-400 px-6 md:px-10 py-8 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Consistence:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellat?</p>
        </div>

        <div className='border border-gray-400 px-6 md:px-10 py-8 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personlization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur architecto odio?</p>
        </div>
      </div>
    </div>
  );
}

export default About;
