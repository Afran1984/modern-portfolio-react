import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
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
        <div>
           {navItems.map((item, index) => (
              <NavLink to={item.path} key={index}>
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