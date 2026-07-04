import React from 'react'

const Banner = () => {
  return (
    <div 
      className='min-h-screen bg-cover bg-center bg-no-repeat w-full relative flex items-center text-white animate-fade-in-up' 
      style={{ animationDelay: '0.20s', backgroundImage: `url(https://i.ibb.co.com/bMfpxZmd/Bg-jim.png)` } }
    >
      {/* ডার্ক ওভারলে */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
        
      {/* মেইন কন্টেন্ট কন্টেইনার */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10'>
        
        {/* বাম পাশের টেক্সট এরিয়া */}
        <div className='max-w-3xl flex flex-col gap-3'>
            
            {/* ১. প্রথমে আসবে নাম (Delay: 0.1s) */}
            <h2 
              className='font-semibold text-2xl md:text-3xl text-orange-500 animate-fade-in-up'
              style={{ animationDelay: '0.4s' }}
            >
              Hi!, I'm Abdur Razzak Jim
            </h2>
            
            {/* ২. নামের পর আসবে টাইটেল (Delay: 0.4s) */}
            <h1 
              className='text-5xl md:text-7xl font-extrabold tracking-tight leading-none animate-fade-in-up'
              style={{ animationDelay: '0.6s' }}
            >
              Web Developer <br />
              <span className='text-orange-600 block mt-2'>From Bangladesh</span>
            </h1>
            
            {/* ৩. টাইটেলের পর আসবে প্যারাগ্রাফ (Delay: 0.7s) */}
            <p 
              className='text-lg md:text-xl text-gray-300 mt-4 leading-relaxed max-w-xl animate-fade-in-up'
              style={{ animationDelay: '0.9s' }}
            >
              Graduate from Premier University, Chittagong. <br /> 
              Major in Computer Science and Engineering.
            </p>
            
            {/* ৪. একদম শেষে আসবে বাটনটি (Delay: 1.0s) */}
            <div 
              className='mt-6 animate-fade-in-up'
              style={{ animationDelay: '1.0s' }}
            >
              <button className='group relative h-12 w-40 overflow-hidden rounded-xl border-2 border-white/60 font-medium transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10'>
                <div className='flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
                  <span className='h-12 flex items-center justify-center text-white font-bold'>
                    Get Started
                  </span>
                  <span className='h-12 flex items-center justify-center text-orange-500 font-bold'>
                    Get Started
                  </span>
                </div>
              </button>
            </div>

        </div>

        {/* ডান পাশের ফাকা ডিভ */}
        <div className='hidden md:block w-1/3'></div>

      </div>
    </div>
  )
}

export default Banner