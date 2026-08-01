import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const SkillsEducation = () => {
  const skills = [
    { name: "HTML", icon: "https://i.ibb.co.com/kg6bykqH/pngegg-2.png" },
    { name: "CSS", icon: "https://i.ibb.co.com/MxkwCWtF/pngegg-5.png" },
    { name: "JS", icon: "https://i.ibb.co.com/Y71fKPsP/pngegg-6.png" },
    { name: "PHP", icon: "https://i.ibb.co.com/dstN6W0r/pngegg-7.png" },
    { name: "NODE JS", icon: "https://i.ibb.co.com/21srZSHv/pngegg-4.png" },
    { name: "React", icon: "https://i.ibb.co.com/YBKCrLpn/pngegg-3.png" },
    { name: "Mysql", icon: "https://i.ibb.co.com/FqWdV0WX/pngegg-8.png" },
    { name: "Bootstrap", icon: "https://i.ibb.co.com/mFFWn5fP/pngegg-9.png" },
    { name: "python", icon: "https://i.ibb.co.com/dwNzV7TT/pngegg-10.png" },
    { name: "C", icon: "https://i.ibb.co.com/gM2FjZd2/pngegg-11.png" },
    { name: "C++", icon: "https://i.ibb.co.com/BVw4VkFS/pngegg-12.png" },
  ];

  const education = [
    {
      degree: "BSc In CSE",
      institution: "Premier University",
      period: "2020 – 2025",
    },
    {
      degree: "HSC",
      institution: "Aftabgonj Govt. College",
      period: "2017 – 2019",
    },
    {
      degree: "SSC",
      institution: "Nabingonj B/L High School",
      period: "2015 – 2017",
    },
  ];

  return (
    <section className="min-h-screen bg-[#161B22] text-white montenegrin py-16 px-6 flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl montenegrin text-center mb-16 tracking-tight">
        Skill & Education
      </h2>

      {/* Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column: SKILLS */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-3">
            <FaBriefcase className="text-red-500 text-xl" />
            <h3 className="text-xl montenegrin uppercase tracking-wider text-gray-200">
              SKILLS
            </h3>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-4 gap-y-8 gap-x-4 text-center">
            {skills?.map((skill, index) => (
              <div className="flex flex-col items-center justify-center gap-2 group">
                <img
                  src={skill?.icon}
                  alt={skill?.name}
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {skill?.name}
                </span>
              </div>
             ))} 
          </div>
        </div>

        {/* Right Column: EDUCATION */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-3">
            <FaGraduationCap className="text-red-500 text-2xl" />
            <h3 className="text-xl montenegrin  uppercase tracking-wider text-gray-200">
              EDUCATION
            </h3>
          </div>

          {/* List */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1.5 w-3 h-3 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base montenegrin text-white">
                    {item.degree}{" "}
                    <span className="text-gray-400 montenegrin">
                      – {item.institution}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;