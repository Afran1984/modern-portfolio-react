import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'Service', path: '/service' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Resharge', path: '/resharge' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

  return (
    <div className='flex justify-between items-center gap-2.5 montenegrin bg-gray-600 text-white p-2 fixed top-0 left-0 right-0 z-50'>
        <div >
            <h3>Abdur <span className='text-orange-600'>Razzak</span></h3>
        </div>
        {/* mobile Responsive */}
        <div className='md:hidden'>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none p-2'
            aria-label="Toggle Menu"
            >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                )}
            </svg>
            </button>
        </div>

        {/* Navigation Link Mobile & desktop */}
        <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 
        bg-gray-600 md:bg-transparent p-4 md:p-0 items-center gap-2 md:gap-0 shadow-lg md:shadow-none
      `}>
           {navItems.map((item, index) => (
              <NavLink 
                to={item.path} 
                key={index}
                onClick={() => setIsOpen(false)}
                >
                    
                {({isActive}) => (
                <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300 '>
                <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                    
                    <span className= {`transition-colors duration-300 h-7 flex items-center justify-center ${isActive? 'text-orange-500' : 'text-white'}`}>
                    {item.name}
                    </span>
                    
                    <span className='text-orange-500 h-7 flex items-center justify-center'>
                    {item.name}
                    </span>
                    
                </div>
                </button>
                )}
            </NavLink>
        ))}
            
        </div>
    </div>
  )
}

export default Navbar