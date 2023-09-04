import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='mt-6 mb-3 border-2 rounded-md text-white py-2 mx-1 text-center'>
        <Link to="Home" smooth duration={500}>Back To Top</Link>
    </div>
  )
}

export default Footer