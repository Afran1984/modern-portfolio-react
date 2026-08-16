import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import axios from 'axios'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Experiance = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://server-modern-portfolio-react.onrender.com/experiance') 
    .then (res => {
        const data = res.data;
        setItems(data);
        setLoading(false);
    })
    .catch (err => {
        console.error('Error fetching experience data:', err);
        setLoading(false);  
    })
  },[]);

  
  if(loading) {
    return (
      <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4'>
        <div className='w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin'></div>
        <p className='text-gray-400 montenegrin tracking-wide animate-pulse'>Loading</p>
      </div>
    )
  }

  return (
    <div className='bg-[#111319] text-white px-4 py-12 montenegrin'>
      <div className='flex items-center'>
        <h1 className='text-2xl montenegrin'>Experiences</h1>
        <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
      </div> 

      <div className="w-full max-w-5xl mx-auto px-4 py-8">    
        <div className="flex w-full items-center justify-center">
          
          {items.length > 0 ? (
            <Carousel className="w-full max-w-[16rem] sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto montenegrin">
              <CarouselContent className="-ml-2 md:-ml-4">
                {items.map((item) => (
                  <CarouselItem key={item.id || item._id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="p-2">
                      <Card className="bg-[#1e2530] border border-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                        <CardContent className="p-0 flex flex-col">
                          
                          <div className="w-full aspect-video overflow-hidden bg-gray-900 relative">
                            <img 
                              src={item.image} 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl montenegrin text-white mb-2 tracking-tight">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          ) : (
            <div className="text-center text-gray-500">No experience items found.</div>
          )}
        </div>
      </div>

    </div>
    
  );
}

export default Experiance;