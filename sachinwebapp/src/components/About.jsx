import React from 'react'
import hardwork from '../assets/hardwork.jpg'

const About = () => {
  return (
    <div name='About' className='w-full py-18 mt-20 text-black bg-white sm:text-white sm:bg-black'>
        <div className='max-w-[1240px] grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
            <div className='ml-0 w-0 lg:col-span-1 md:col-span-1 sm:col-span-1'>
                <img className='w:full lg:max-w-[400px] md:max-w-[300px] sm:max-w-[300px] pl-0 ml-0' src={hardwork} alt="climbing mountain" />
            </div>
            <div className=' mx-auto grid lg:col-span-2 md:col-span-2 sm:col-span-1 py-28'>
                <h1 className='font-bold  mx-auto my-auto pt-10 text-3xl pb-1 border-b-4 border-[#00FFFF] md:text-5xl sm:text-4xl'>About</h1>
                <p>N/A   In development...</p>
            </div>
        </div>

    </div>
  )
}

export default About