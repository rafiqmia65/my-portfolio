import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg bg-white/5 border border-gray-700/30 hover:border-primary/50 transition-all duration-100 flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
          hovered ? "opacity-100" : ""
        }`}
      ></div>

      {/* Project Image */}
      <div
        className="relative w-full h-48 overflow-hidden"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Hover Overlay Links */}
        <AnimatePresence>
          {imageHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary rounded-full text-white"
                title="Live Demo"
              >
                <FiExternalLink size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={project.links.client}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-white"
                title="Client Code"
              >
                <FiGithub size={20} />
              </motion.a>
              {project.links.server && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full text-white"
                  title="Server Code"
                >
                  <FiGithub size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex gap-3 items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.name}
              </a>
            </h3>
            <p className="text-sm mb-3 text-success/80 font-bold">
              {project.tagline}
            </p>
          </div>

          <motion.a
            whileHover={{ y: -2 }}
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-2 py-2 rounded-lg bg-primary  hover:bg-primary/40 text-white text-sm font-medium"
          >
            <FiExternalLink /> Live Demo
          </motion.a>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies
              .flatMap((group) => group.items.slice(0, 4))
              .map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 text-xs rounded-full bg-success/20 border border-success text-white"
                >
                  {tech}
                </motion.span>
              ))}
          </div>
        </div>

        {/* Buttons Row */}
        <div className="mt-auto flex gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            href={project.links.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-success/60 hover:bg-success/80 text-white text-sm font-medium"
          >
            <FiGithub /> Client
          </motion.a>
          {project.links.server && (
            <motion.a
              whileHover={{ y: -2 }}
              href={project.links.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-success/40 hover:bg-success/60 text-white text-sm font-medium"
            >
              <FiGithub /> Server
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
