import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiVscodium,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "VS Code", icon: <SiVscodium className="text-blue-400" /> },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-secondary min-h-screen py-16 px-6 lg:px-20"
    >
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        My Skills
      </h2>

      <div className="grid lg:grid-cols-3 gap-10">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-accent/20 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4 text-success">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 hover:bg-secondary/50 cursor-pointer rounded-md px-3 py-2 transition"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
