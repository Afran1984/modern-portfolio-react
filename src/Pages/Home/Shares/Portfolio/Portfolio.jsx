import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import axios from 'axios'
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails'


const Portfolio = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(null);
  

  useEffect(() =>{
    axios.get('https://server-modern-portfolio-react.onrender.com/project')
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

  // console.log('Learn More... Bhai', showDetails);

  if(loading) {
    return (
      <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4'>
        <div className='w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin'></div>
        <p className='text-gray-400 montenegrin tracking-wide animate-pulse'>Loading</p>
      </div>
    )
  }
  return (
    <section >
      {showDetails?(<PortfolioDetails project={showDetails} loading={loading} onClose={() => setShowDetails(null)} />) :(
        <>
        <div className='bg-[#9A918C] px-4 py-12'>
        <div className='flex items-center mt-10'>
            <h1 className='text-2xl montenegrin'>Projects</h1>
            <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          
          {project.map((items, index) => (
            <div 
              key={index} 
              className="group relative h-full w-full overflow-hidden border border-gray-700 rounded-xl hover:border-orange-500 transition-all duration-500 cursor-pointer montenegrin"
            >
              
              <div className="w-full h-full overflow-hidden transition-all duration-500 group-hover:scale-110">
                <img 
                  src={items.portfolio || "/logos/my-logo.png"} 
                  alt={items.name} 
                  className="h-full w-full object-cover" 
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">

                <button className='text-center text-red-600' onClick={(() => setShowDetails(items))}>Learn More</button>
                
                <h2 className="text-2xl montenegrin text-orange-400 mb-1">
                  {items.name}
                </h2>
                
                <span className="text-sm montenegrin text-orange-400 block mb-2">
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
      </>) }
    </section>
    
  )
}

export default Portfolio