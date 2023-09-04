import React from 'react'
import Avatar from '../assets/coder.png'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div name="Home" className='text-white w-full my-15 py-20 px-4'>
      <div className='max-w-[920px] mx-auto grid md:grid-cols-2 lg:pt-14 mb-15 lg:border lg:border-white'>
        <img src={Avatar} alt='Avatar' className='rounded-full w-[300px] mx-auto my-4 md:animate-bounce' />
        <div className='flex flex-col justify-center text-center'>
          <p className='font-bold p-2 md:text-2xl text-[#00FFFF]'>WHO AM I?</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-5 sm:py-3'>SACHIN</h1>
          <div>
            <Typed className='md:text-5xl sm:text-4xl text-2xl text-gray-600' strings={['Keen programmer', 'Game Developer', 'Software Developer' , 'Mathematician', 'Amateur Boxer', 'Aspiring Computer Scientist']} typeSpeed={120} backSpeed={140} loop />
          </div>
          


        </div>
      </div>
        
    </div>
  )
}

export default Hero