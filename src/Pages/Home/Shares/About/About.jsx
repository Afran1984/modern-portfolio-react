import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const About = () => {
  return (
    <div className='bg-[#9A918C] px-4 py-12'>
        <div className='flex items-center'>
            <h1 className='text-2xl montenegrin'>About Me..</h1>
            <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>
        <p className='montenegrin text-black mt-4'>
            I am a passionate developer with experience in creating dynamic and responsive web applications. I have a strong foundation in JavaScript, React, and Node.js, and I am always eager to learn new technologies and improve my skills.
        </p>
        <div className="min-h-screen text-black flex items-center justify-center relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div className="w-full flex justify-center">
                <img
                    src="https://i.ibb.co.com/KxBgC1SB/Untitled-design-2.png" 
                    alt="Abdur Razzak Jim"
                    className="rounded-xl h-96 w-full max-w-md object-cover shadow-2xl border border-gray-800"
                />
                </div>

                <div className="flex flex-col space-y-6">
                <div>
                    <h1 className="text-4xl md:text-5xl montenegrin tracking-tight mb-6">
                    Hi There!
                    </h1>
                    <div className="border-b border-gray-800 mb-6"></div>
                    <h2 className="text-xl md:text-2xl montenegrin font-bold tracking-wide uppercase text-black mb-4">
                    Personal Infos
                    </h2>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base text-black">
                    <div>
                    <span className='montenegrin'>Name : </span>
                    <strong className="text-black montenegrin">Abdur Razzak Jim</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Address : </span>
                    <strong className="text-black montenegrin ">Chattogram</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Status : </span>
                    <strong className="text-black montenegrin">Single</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Phone : </span>
                    <strong className="text-black montenegrin">+8801717663447</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Nationality : </span>
                    <strong className="text-black montenegrin">Bangladeshi</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Email: </span>
                    <a 
                        href="mailto:afranrazzak1984@gmail.com" 
                        className="text-blue-600 montenegrin hover:underline break-all"
                    >
                        afranrazzak1984@gmail.com
                    </a>
                    </div>

                    <div>
                    <span className='montenegrin'>Freelance : </span>
                    <strong className="text-black montenegrin">Available</strong>
                    </div>

                    <div>
                    <span className='montenegrin'>Languages : </span>
                    <strong className="text-black montenegrin">Bangla, English</strong>
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <a
                    href="#download-cv"
                    className="inline-block bg-[#E50914] hover:bg-red-700 text-white montenegrin px-8 py-3 rounded-lg shadow-lg transition duration-300"
                    >
                    Download CV
                    </a>
                </div>
                </div>

            </div>
            </div>
    </div>
  )
}

export default About