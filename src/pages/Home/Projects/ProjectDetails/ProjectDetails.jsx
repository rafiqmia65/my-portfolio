import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../../../Loader//Loader";
import {
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaPaintBrush,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/projects.json");
        const projectsData = await response.json();
        const foundProject = projectsData.find((p) => p.id === id);
        setProject(foundProject);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Technology icons mapping
  const getTechIcon = (techName) => {
    const icons = {
      React: <FaReact className="text-blue-400" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
      "React Query": <SiJavascript className="text-yellow-400" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      Express: <SiExpress className="text-gray-400" />,
      MongoDB: <SiMongodb className="text-green-600" />,
      "Firebase Auth": <SiFirebase className="text-orange-500" />,
      Stripe: <SiStripe className="text-purple-500" />,
      Cloudinary: <FaPaintBrush className="text-blue-500" />,
      "React Leaflet": <FaMobile className="text-green-400" />,
      JWT: <FaShieldAlt className="text-purple-400" />,
      DaisyUI: <FaPaintBrush className="text-pink-500" />,
      JavaScript: <SiJavascript className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-600" />,
    };

    return icons[techName] || <FaCode className="text-gray-400" />;
  };

  if (loading) {
    return <Loader></Loader>;
  }

  if (!project) {
    return (
      <div className="text-center min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="bg-secondary/20 p-8 rounded-xl max-w-md">
          <h2 className="text-3xl font-bold text-red-400 mb-4">404</h2>
          <p className="text-xl text-white/80">Project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary pt-35 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-success to-emerald-300">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl mt-4 text-white/80">
            {project.tagline}
          </p>
        </div>

        {/* Enhanced Image Section */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl mb-12 hover:shadow-success/20 transition-shadow duration-500">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.name}
            </h3>
          </div>
        </div>

        <div className="space-y-8">
          {/* Detailed Description Section */}
          <div className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-success/10 transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-success mb-4">
              Project Overview
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              {project.detailedDescription}
            </p>
          </div>

          {/* Technologies & Features Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technologies */}
            <div className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-success/10 transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-success mb-6">
                Technologies Used
              </h2>
              <div className="space-y-6">
                {project.technologies.map((techGroup) => (
                  <div key={techGroup.category} className="space-y-3">
                    <h3 className="text-xl font-semibold text-white/90 border-b border-white/10 pb-2">
                      {techGroup.category}
                    </h3>
                    <ul className="space-y-3">
                      {techGroup.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-white/90"
                        >
                          <span className="text-lg">{getTechIcon(item)}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-success/10 transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-success mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-success mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-lg text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links Section */}
          <div className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-success/10 transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-success mb-6">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-success/90 to-emerald-700 text-white font-semibold hover:shadow-lg hover:shadow-success/20 transition-all duration-300 min-w-[200px]"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
              <a
                href={project.links.client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[200px]"
              >
                <FaCode />
                <span>Client Code</span>
              </a>
              {project.links.server && (
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[200px]"
                >
                  <FaCode />
                  <span>Server Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
