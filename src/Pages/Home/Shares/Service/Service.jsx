import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Monitor, PenTool, Smartphone, LineChart, MoveRight } from 'lucide-react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const iconMap = {
  Monitor: Monitor,
  PenTool: PenTool,
  Smartphone: Smartphone,
  LineChart: LineChart,
};

export default function Service() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/services')
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div className="text-center text-white py-10">Loading services...</div>;
  }

  return (
    <section className="bg-[#0b0f17] min-h-screen montenegrin text-gray-300 p-8">
        { selectedService ? (<ServiceDetails service={selectedService} onClose={() => setSelectedService(null)} />) : (
          <> 
              <div className='flex items-center mt-10'>
                  <h1 className='text-2xl montenegrin'>Service</h1>
                  <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
              </div>
            <p className="max-w-xl text-gray-400 text-sm md:text-base mb-10 leading-relaxed">
              Zero compromise. Raw innovation. Weaponizing AI, Web, and R&D to catapult your business ahead of the pack.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item) => {
                const IconComponent = iconMap[item.icon] || Monitor;

                return (
                  <div
                    key={item.id}
                    className="bg-[#131722] border border-gray-800/60 rounded-xl p-8 flex flex-col justify-between hover:border-gray-700 transition-all duration-300 shadow-lg group cursor-pointer"
                  >
                    <div>
                      {/* Icon */}
                      <div className="mb-8">
                        <IconComponent className={`w-10 h-10 ${item.iconColor}`} strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-8">
                        {item.title}
                      </h3>
                    </div>

                    {/* Action Link */}
                    <button onClick={(() => setSelectedService(item))}
                      className="inline-flex items-center gap-2 text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                );
              })}
            </div>
        
        </>) }

       
    </section>
  );
}