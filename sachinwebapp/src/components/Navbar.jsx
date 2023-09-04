import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
    id: 1,
    link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Skills'
    },
    {
      id: 4,
      link: 'Projects'
    },
    {
      id: 5,
      link: 'Contacts'
    },

  ]
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1300px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-medium md:pl-5 text-[#00FFFF]'>Sachin.live</h1>
      <ul className='hidden md:flex'>

        {links.map(({id , link}) => (
          <li key={id} className='p-4 hover:font-semibold hover:scale-105'><Link to={link} smooth duration={500}>{link}</Link></li>

        ))}

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-medium text-[#00FFFF] m-4'>Sachin.live</h1>
        {links.map(({id , link}) => (
          <li key={id} className='p-4 border-b border-gray-600'><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>

        ))}
          
      </ul>
    </div>
  );
};

export default Navbar;