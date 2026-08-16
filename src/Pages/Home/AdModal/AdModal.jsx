import React, { useEffect, useState } from 'react'

const AdModal = () => {
    const [timeLeft, setTimeLeft] = useState(10);
    const [canSkip, setCanSkip] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    // ১০ সেকেন্ডের টাইমার
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanSkip(true); // ১০ সেকেন্ড শেষ হলে স্কিপ বাটন এনেবল হবে
    }
  }, [timeLeft]);

  const handleClose = () => {
    setIsVisible(false);
  }
  if(!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      {/* Top Bar / Skip Button Section */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
        {!canSkip ? (
          <span className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full border border-gray-700 font-medium shadow-md">
            Skip in <span className="text-orange-500 font-bold">{timeLeft}</span>s
          </span>
        ) : (
          <button
            onClick={handleClose}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-lg cursor-pointer animate-bounce"
          >
            Skip Ad ✕
          </button>
        )}
      </div>

      {/* Main Advertisement Content */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col items-center justify-center text-center p-6">
        
        {/* এখানে আপনার বিজ্ঞাপনের Banner/Image/Video দিতে পারেন */}
        <div className="space-y-4">
          <span className="bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/20">
            Sponsored Ad
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Special Promotion Offer!
          </h2>
          
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
            Get 50% discount on all our premium services today. Don't miss out on this limited-time offer.
          </p>

          <div className="pt-4">
            <a
              href="/contact"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdModal