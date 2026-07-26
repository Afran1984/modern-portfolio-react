import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiPhp,
//   SiNodedotjs,
//   SiLaravel,
//   SiMysql,
//   SiBootstrap,
// } from "react-icons/si";

const SkillsEducation = () => {
//   const skills = [
//     { name: "HTML", icon: <SiHtml5 className="text-[#E34F26] text-5xl" /> },
//     { name: "CSS", icon: <SiCss3 className="text-[#1572B6] text-5xl" /> },
//     { name: "JS", icon: <SiJavascript className="text-[#F7DF1E] text-5xl rounded-sm" /> },
//     { name: "PHP", icon: <SiPhp className="text-[#777BB4] text-5xl" /> },
//     { name: "NODE JS", icon: <SiNodedotjs className="text-[#339933] text-5xl" /> },
//     { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20] text-5xl" /> },
//     { name: "Mysql", icon: <SiMysql className="text-[#4479A1] text-5xl" /> },
//     { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3] text-5xl" /> },
//   ];

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
            {/* {skills?.map((skill, index) => ( */}
              <div className="flex flex-col items-center justify-center gap-2 group">
                <div className="p-2 transition-transform duration-300 group-hover:scale-110">
                  {/* {skill?.icon} */}
                </div>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {/* {skill?.name} */}
                </span>
              </div>
            {/* ))} */}
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