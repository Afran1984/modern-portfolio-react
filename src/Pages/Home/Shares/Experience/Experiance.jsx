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

const Experiance = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/experiance.json') 
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

  
  if (loading) {
    return <div className="text-center text-white py-10">Loading experiences...</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-3xl text-white mb-2">Experience</h1>
      <p className="text-center text-gray-400 mb-8">This is the experience section with custom items.</p>
      
      <div className="flex w-full items-center justify-center">
        
        {items.length > 0 ? (
          <Carousel className="w-full max-w-[16rem] sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
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
                          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
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
  );
}

export default Experiance;