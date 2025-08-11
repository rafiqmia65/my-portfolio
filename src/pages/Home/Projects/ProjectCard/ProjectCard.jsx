import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden shadow-lg bg-white/5 border border-gray-700/30 hover:border-primary/50 transition-all duration-100"
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
          hovered ? "opacity-100" : ""
        }`}
      ></div>

      {/* Project Image with Hover Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

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
                className="p-3 bg-primary rounded-full text-white cursor-pointer"
                title="Live Demo"
              >
                <FiExternalLink size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={project.links.client}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-white cursor-pointer"
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
                  className="p-3 bg-gray-800 rounded-full text-white cursor-pointer"
                  title="Server Code"
                >
                  <FiGithub size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-sm mt-2 text-success/80 font-bold">
              {project.tagline}
            </p>
          </div>
          <motion.a
            whileHover={{ y: -2 }}
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors ml-4 cursor-pointer"
          >
            <FiExternalLink /> Live Demo
          </motion.a>
        </div>

        {/* Description */}
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
                  className="px-2.5 py-1 text-xs rounded-full bg-success/20 border border-success text-white cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Client Code */}
          <motion.a
            whileHover={{ y: -2 }}
            href={project.links.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors cursor-pointer min-h-[42px]"
          >
            <FiGithub /> Client Code
          </motion.a>

          {/* Server Code */}
          {project.links.server ? (
            <motion.a
              whileHover={{ y: -2 }}
              href={project.links.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-success/60 hover:bg-success/90 text-white text-sm font-medium transition-colors cursor-pointer min-h-[42px]"
            >
              <FiGithub /> Server Code
            </motion.a>
          ) : (
            // Placeholder styled same as button
            <div className="flex-1 min-h-[42px] rounded-lg bg-transparent"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
