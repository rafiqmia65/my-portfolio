import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFire,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiReactrouter,
  SiRedux,
  SiAxios,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { PiTreeStructureBold } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "React Router", icon: <SiReactrouter className="text-pink-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "React Query", icon: <SiReactquery className="text-red-400" /> },
    { name: "Axios", icon: <SiAxios className="text-purple-500" /> },
    {
      name: "React Hook Form",
      icon: <PiTreeStructureBold className="text-pink-400" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    {
      name: "Framer Motion",
      icon: (
        <motion.div whileHover={{ scale: 1.2 }} className="text-white">
          🖱️
        </motion.div>
      ),
    },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "REST API", icon: <TbApi className="text-blue-400" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
  ],
  Tools: [
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Firebase Hosting", icon: <FaFire className="text-orange-400" /> },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black bg-white rounded" />,
    },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 px-6 lg:px-20 bg-primary overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My <span className="text-success">Skills</span>
        </h2>
        <p className="text-lg md:text-xl text-center text-white/80 mb-12 md:mb-16 max-w-3xl mx-auto">
          Technologies I've mastered and tools I use daily to create amazing
          digital experiences
        </p>

        {/* Category tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-secondary/30 rounded-full p-1 backdrop-blur-sm">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-lg font-medium transition-all cursor-pointer ${
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

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="aspect-square bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:border-success/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-success/10 h-full flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white text-center">
                  {skill.name}
                </h3>
              </div>
              {hoveredSkill === skill.name && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-success/60 text-white px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* All skills visualization */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">
            Skills Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {Object.values(skillsData)
              .flat()
              .map((skill) => (
                <div
                  key={skill.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="text-2xl md:text-3xl p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-success/20 group-hover:border-success/30 transition-all duration-300">
                    {skill.icon}
                  </div>
                  {hoveredSkill === skill.name && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-success/60 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      {skill.name}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
