import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import web1 from '../assets/web1heroku.png'
import web2 from '../assets/web2.png'
import dumbell from '../assets/dumbell.jpg'
import movie from '../assets/movie.png'

const Projects = () => {
  return (
    <div name='Projects' className='text-white px-10 pb-20'>
        <h1 className='font-bold pt-10 px-10 text-[#00FFFF] mt-10 mb-10 text-3xl md:text-5xl mx-auto my-auto sm:text-4xl'>Projects</h1>
        <div className='mx-auto lg:grid lg:grid-cols-2'>
            <div className=' mx-auto lg:grid lg:col-span-1'>
                <Carousel className='lg:w-2/3'>
                        <div>
                            <img src={web1}  alt='bob'/>
                            <p className="legend">Website made in year 11 from heroku framework including a twitter clone - unfortunately heroku free servers shut down and website got lost</p>
                        </div>
                        
                        <div>
                            <img  src={web2} alt='bob' />
                            <p className="legend">current website</p>
                        </div>
                        <div>
                            <img src={dumbell} alt='bob' />
                            <p className="legend">Project Fitness is an ONGOING project which is essentially an application which uses deep learning via opencv and python to track gym workouts and uploads on a database.</p>
                        </div>
                        <div>
                            <img src={movie} alt='bob'/>
                            <p className="legend">Made a film website using React</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt='bob'/>
                            <p className="legend">Video Game creation using unity</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt='bob' />
                            <p className="legend">YET TO UPLOAD</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt='bob' />
                            <p className="legend">YET TO UPLOAD</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt='bob' />
                            <p className="legend">YET TO UPLOAD</p>
                        </div>
                    </Carousel>
            </div>
            <div className='md:grid md:col-span-1 mx-auto my-auto pb-6'>
                <p className='font-bold md:text-base lg:text-2xl pl-4 md:text-center text-gray-600'>Project Links are temporarily unavailable.</p>
                <p className='font-bold md:text-base lg:text-2xl md:text-center text-gray-600'>Please wait a couple of days</p>
            </div>
        </div>
        
    </div>
)
}

export default Projects