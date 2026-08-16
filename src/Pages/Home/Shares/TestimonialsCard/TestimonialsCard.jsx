import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TestimonialsForm from '../TestimonialsForm/TestimonialsForm';
import { useNavigate } from 'react-router';


const TestimonialsCard = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Api call & data Loading
    useEffect(() => {
        axios.get('https://server-modern-portfolio-react.onrender.com/testimonials')
        .then((res) => {
            const allData = res.data;
            const updateLatestData = allData.slice(-4).reverse();
            setTestimonials(updateLatestData);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching testimonials data:", error);
            setLoading(false);
        })
     }, []);


    //  Navigate to Other Page
     const handleNavigation = () => {
        navigate('/testimonialsform');
      }

     if(loading) {
        return (
        <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4'>
            <div className='w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin'></div>
            <p className='text-gray-400 montenegrin tracking-wide animate-pulse'>Loading</p>
        </div>
      )
    }

  return (
    <section className="bg-[#212529] montenegrin min-h-screen text-gray-200 py-16 px-4 md:px-8 flex flex-col justify-center items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wide">
        Read what our customers say
      </h2>
      <span className="text-gray-400 text-sm md:text-base mb-12 text-center">
        do you want Review <a onClick={handleNavigation} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600 transition-colors duration-200">me?</a>
      </span>

      {/* Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#2c3036] rounded-2xl p-6 md:p-8 flex items-start gap-6 shadow-xl border border-gray-800/40"
          >
            {/* Avatar with Thick Yellow/Amber Border */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-amber-400 p-1 flex items-center justify-center">
                <img
                  src={item?.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                {item?.quote ? (
                  item.quote
                ) : (
                  <span className="text-red-400">
                    Server is not working or quote is unavailable!
                  </span>
                )}
              </p>
              <h3 className="text-white text-base md:text-lg font-bold">
                {item?.name ? item.name : <span className="text-red-400">No read Name</span>}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium mt-0.5">
                {item?.role ? item.role : <span className="text-red-400">Customer</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsCard