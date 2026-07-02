import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-2.5 montenegrin bg-gray-600 text-white p-2'>
        <div >
            <h3>Abdur <span className='text-orange-600'>Razzak</span></h3>
        </div>
        <div>
            {/* Home */}
            <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300'>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                Home
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                Home
                </span>
                
            </div>
            </button>
            {/* About  */}
            <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300'>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                About
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                About
                </span>
                
            </div>
            </button>
                {/* Service  */}
            <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300 '>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                Service
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                Service
                </span>
                
            </div>
            </button>
            {/* Portfolio  */}
            <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300 '>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                Portfolio
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                Portfolio
                </span>
                
            </div>
            </button>
            {/* Resharch  */}
            <button className='group relative mr-5 h-11 overflow-hidden px-5 py-2 font-medium transition-all duration-300'>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                Resharch
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                Research
                </span>
                
            </div>
            </button>
            {/* <button className='mr-5 border-2 px-5 py-2 rounded-xl hover:text-orange-500'>Contact</button> */}

            <button className='group relative mr-5 h-11 overflow-hidden rounded-xl border-2 px-5 py-2 font-medium transition-all duration-300 hover:border-orange-500'>
            <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-7'>
                
                <span className='text-white transition-colors duration-300 h-7 flex items-center justify-center'>
                Contact
                </span>
                
                <span className='text-orange-500 h-7 flex items-center justify-center'>
                Contact
                </span>
                
            </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar