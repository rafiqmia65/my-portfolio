import React, { useState, useMemo } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFire,
  FaLock,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiReactrouter,
  SiRedux,
  SiAxios,
  SiVercel,
  SiNetlify,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiJsonwebtokens,
  SiZod,
  SiDocker,
  SiJest,
} from "react-icons/si";

import { TbBrandVscode, TbApi } from "react-icons/tb";
import { PiTreeStructureBold } from "react-icons/pi";
import { SiReactquery } from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React Router", icon: <SiReactrouter className="text-pink-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "React Query", icon: <SiReactquery className="text-red-400" /> },
    { name: "Axios", icon: <SiAxios className="text-purple-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "REST API", icon: <TbApi className="text-blue-400" /> },
    {
      name: "JWT Authentication",
      icon: <SiJsonwebtokens className="text-orange-400" />,
    },
    { name: "Better Auth", icon: <FaLock className="text-emerald-400" /> },

    // cleaned duplicates (kept meaningful version only)
    {
      name: "ER Diagram & System Design",
      icon: <PiTreeStructureBold className="text-pink-400" />,
    },

    { name: "Zod Validation", icon: <SiZod className="text-yellow-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Mongoose ODM", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-400" /> },
  ],

  DevOps: [
    {
      name: "Vercel",
      icon: <SiVercel className="text-white bg-black rounded" />,
    },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  ],

  Tools: [
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Firebase", icon: <FaFire className="text-orange-400" /> },
  ],

  Integrations: [
    { name: "Stripe Payments", icon: <SiStripe className="text-purple-400" /> },
    {
      name: "Authentication System",
      icon: <FaLock className="text-green-400" />,
    },
  ],

  Testing: [
    { name: "Unit Testing (Jest)", icon: <SiJest className="text-red-400" /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // performance improvement
  const allSkills = useMemo(() => {
    return Object.values(skillsData).flat();
  }, []);

  return (
    <section className="relative min-h-screen py-16 bg-primary overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 lg:px-0">
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My <span className="text-success">Skills</span>
        </h2>

        <p className="text-lg md:text-xl text-center text-white/80 mb-12 md:mb-16 max-w-3xl mx-auto">
          Technologies I've mastered and tools I use daily to build scalable,
          production-ready applications
        </p>

        {/* TABS */}
        <div className="flex justify-center mb-10 px-2">
          <div className="w-full flex justify-center">
            <div className="overflow-x-auto scrollbar-hide max-w-full">
              <div className="inline-flex bg-secondary/30 rounded-full p-1 backdrop-blur-sm mx-auto whitespace-nowrap">
                {Object.keys(skillsData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all ${
                      activeTab === category
                        ? "bg-success/60 text-white shadow-lg"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="aspect-square bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:border-success/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-success/10 flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition">
                  {skill.icon}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-white text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* OVERVIEW (FIXED UX - NO NAME OVERLAP ISSUE) */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6">
            Skills Overview
          </h3>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {allSkills.map((skill) => {
              const isActive = hoveredSkill === skill.name;

              return (
                <div key={skill.name} className="relative group">
                  {/* ICON */}
                  <div
                    className={`text-2xl md:text-3xl p-3 rounded-lg border transition-all duration-300
                      ${
                        isActive
                          ? "bg-success/30 border-success scale-110 shadow-lg shadow-success/20"
                          : "bg-white/5 border-white/10"
                      }`}
                  >
                    {skill.icon}
                  </div>

                  {/* ONLY SHOW NAME ON TOP ON HOVER */}
                  {isActive && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-success/60 text-white text-[10px] md:text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg z-10">
                      {skill.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
