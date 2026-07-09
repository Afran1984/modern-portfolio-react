import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Resharge = () => {
    const [research, setResearch] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('resharce.json')
        .then(res => {
            const data = res.data;
            setResearch(data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching research data:', err);
            setLoading(false);
        })
    }, []);

    console.log('Research data:', research);

  return (
    <div className='bg-gray-300 px-4 py-12'>
        <div className='flex items-center'>
            <h1 className='text-2xl montenegrin'>Research</h1>
            <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center mt-3">
            {research && research.map((items, index) => (
                <div 
                key={index} 
                className="max-w-2xl bg-[#1e2530] rounded-2xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer p-5 font-sans"
                >
                <div className="w-full rounded-xl overflow-hidden bg-white flex items-center justify-center relative">
                    <img 
                    src={items.portfolio} 
                    alt="Bangladesh Premier League Prediction Project" 
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="mt-6 px-1">
                    
                    <div className="flex items-center text-gray-400 text-sm md:text-base font-medium space-x-2">
                    <span>{items.date}</span>
                    <span className="text-gray-500 text-lg">•</span>
                    <span>{items.pname}</span>
                    </div>

                    <h2 className="mt-4 text-white text-2xl md:text-3xl font-bold leading-snug tracking-tight hover:text-blue-400 transition-colors duration-200">{items.description}</h2>
                </div>
                </div>
            ))}
            </div>
        
    </div>
  )
}

export default Resharge