import { CheckCircle2, Code2, MoveLeft } from 'lucide-react';
import React from 'react'

const PortfolioDetails = ({project, onClose}) => {
    console.log('Project is Finding', project);
    if(!project) return(null);
  return (
    <div className="bg-[#131722] border border-gray-800 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto my-8 relative shadow-2xl overflow-hidden montenegrin">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-6 transition-colors cursor-pointer text-sm font-medium"
          >
            <MoveLeft className="w-4 h-4" />
            <span>Back to </span>
          </button>
    
          {/* Service Banner Image (যদি img ফিল্ডে লিংক থাকে) */}
          {project.portfolio && (
            <div className="w-full h-full md:h-full mb-8 rounded-xl overflow-hidden border border-gray-800">
              <img
                src={project.portfolio}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
    
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {project.title}
          </h2>
    
          {/* Description */}
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            Description
          </h3>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
             {project.description}
          </p>

            {/* Techonology */}
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-orange-500" />
            Use Techonology
          </h3>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
             {project.Technologies}
          </p>
          {/* link */}
            <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      Show Others Details
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <li
                            className="bg-[#181D2B] border border-gray-800/80 rounded-lg p-3 text-gray-300 text-sm flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span className="capitalize font-medium text-white">Github:</span>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-400 truncate">
                            {project.github}
                            </a>
                        </li>
                    </ul>
            </div>
        </div>
  )
}

export default PortfolioDetails