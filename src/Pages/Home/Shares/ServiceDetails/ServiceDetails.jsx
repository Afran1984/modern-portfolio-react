// import React from 'react';
// import { MoveLeft, CheckCircle2, Code2 } from 'lucide-react';

// export default function ServiceDetails({ service, onClose }) {
//   if (!service) return null;

//   return (
//     <div className="bg-[#131722] border border-gray-800 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto my-8 relative shadow-2xl">
//       {/* Back Button */}
//       <button
//         onClick={onClose}
//         className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors cursor-pointer text-sm font-medium"
//       >
//         <MoveLeft className="w-4 h-4" />
//         <span>Back to All Services</span>
//       </button>

//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//         {service.title}
//       </h2>

//       {/* Description */}
//       <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
//         {service.Description}
//       </p>

//       {/* Features List */}
//       {service.Features && service.Features.length > 0 && (
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//             <CheckCircle2 className="w-5 h-5 text-orange-500" />
//             Key Features
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {service.Features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="bg-[#181D2B] border border-gray-800/80 rounded-lg p-3 text-gray-300 text-sm flex items-center gap-2"
//               >
//                 <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Frameworks / Tech Stack */}
//       {service.Framework && service.Framework.length > 0 && (
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//             <Code2 className="w-5 h-5 text-orange-500" />
//             Frameworks & Tools
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {service.Framework.map((tech, index) => (
//               <span
//                 key={index}
//                 className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-1.5 rounded-lg text-xs font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import { MoveLeft, CheckCircle2, Code2 } from 'lucide-react';

export default function ServiceDetails({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="bg-[#131722] border border-gray-800 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto my-8 relative shadow-2xl overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-6 transition-colors cursor-pointer text-sm font-medium"
      >
        <MoveLeft className="w-4 h-4" />
        <span>Back to All Services</span>
      </button>

      {/* Service Banner Image (যদি img ফিল্ডে লিংক থাকে) */}
      {service.img && (
        <div className="w-full h-full md:h-full mb-8 rounded-xl overflow-hidden border border-gray-800">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {service.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
        {service.Description}
      </p>

      {/* Features List */}
      {service.Features && service.Features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            Key Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.Features.map((feature, index) => (
              <li
                key={index}
                className="bg-[#181D2B] border border-gray-800/80 rounded-lg p-3 text-gray-300 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Frameworks / Tech Stack */}
      {service.Framework && service.Framework.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-orange-500" />
            Frameworks & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.Framework.map((tech, index) => (
              <span
                key={index}
                className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-1.5 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}