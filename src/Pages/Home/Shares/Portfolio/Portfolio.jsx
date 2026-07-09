import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoIosArrowRoundForward } from 'react-icons/io'
import axios from 'axios'


const Portfolio = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    axios.get('project.json')
    .then(res => {
      const data = res.data;
      setProject(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching project data:', err);
      setLoading(false);
    })
  },[]);

  if(loading) {
    return (
      <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4'>
        <div className='w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin'></div>
        <p className='text-gray-400 font-medium tracking-wide animate-pulse'>Loading</p>
      </div>
    )
  }
  return (
    <div className='bg-[#9A918C] px-4 py-12'>
      <div className='flex items-center'>
          <h1 className='text-2xl montenegrin'>Projects</h1>
          <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
        
        {project.map((items, index) => (
          <div 
            key={index} 
            className="group relative h-full w-full overflow-hidden border border-gray-700 rounded-xl hover:border-orange-500 transition-all duration-500 cursor-pointer"
          >
            
            <div className="w-full h-full overflow-hidden transition-all duration-500 group-hover:scale-110">
              <img 
                src={items.portfolio || "/logos/my-logo.png"} 
                alt={items.name} 
                className="h-full w-full object-cover" 
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              
              <h2 className="text-2xl font-bold text-white mb-1">
                {items.name}
              </h2>
              
              <span className="text-sm font-semibold text-orange-400 block mb-2">
                {items.title}
              </span>
              
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {items.description}
              </p>
              
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio