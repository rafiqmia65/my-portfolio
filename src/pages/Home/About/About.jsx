import React from "react";
import { FaLightbulb, FaSeedling, FaStar, FaAws } from "react-icons/fa";
import {
  SiGraphql,
  SiDocker,
  SiGo,
  SiApollographql,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaServer, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/98 text-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column - Intro */}
          <article className="flex-1 flex flex-col">
            <h2 className="text-5xl text-center lg:text-left font-extrabold text-success mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed flex-1">
              <p>
                I'm a{" "}
                <strong className="text-success font-bold">
                  Full Stack Developer
                </strong>{" "}
                with a strong focus on building modern, scalable, and
                high-performance web applications. I work across the entire
                development lifecycle — from{" "}
                <span className="text-success font-medium">
                  frontend UI/UX design
                </span>{" "}
                to{" "}
                <span className="text-success font-medium">
                  backend architecture and API development
                </span>{" "}
                ensuring seamless integration between all layers of the system.
              </p>

              <p>
                I have hands-on experience working with modern frontend
                technologies and robust backend systems. I build{" "}
                <span className="text-success font-medium">
                  responsive, interactive user interfaces
                </span>{" "}
                while also designing{" "}
                <span className="text-success font-medium">
                  secure, scalable REST APIs and database structures
                </span>{" "}
                that support real-world production applications.
              </p>

              <p>
                My approach goes beyond just writing code — I think in terms of{" "}
                <span className="text-success font-medium">
                  system design, performance optimization, and scalability
                </span>
                . I continuously explore new technologies and architectural
                patterns to build efficient, maintainable, and future-ready
                applications that deliver real user value.
              </p>
            </div>

            {/* Fun Fact */}
            <aside className="bg-secondary/20 p-6 rounded-xl border border-success/20 mt-6">
              <h3 className="text-3xl font-bold text-success flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Fun Fact
              </h3>
              <p className="text-lg mt-3">
                When I'm not coding, I enjoy contributing to open-source
                projects and mentoring new developers in online communities.
              </p>
            </aside>
          </article>

          {/* Vertical Divider */}
          <div className="flex-none w-px bg-success/60 hidden md:block"></div>

          {/* Right Column - Key Skills & Philosophy */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Development Philosophy */}
            <article className="bg-secondary/20 p-6 rounded-xl border border-success/20 flex-1">
              <h3 className="text-3xl font-bold text-success mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-300" /> Development
                Philosophy
              </h3>
              <ul className="space-y-4 text-lg">
                {[
                  "Build scalable and maintainable systems",
                  "Focus on performance and optimized user experience",
                  "Write clean, reusable, and well-structured code",
                  "Think beyond UI — consider backend, data, and architecture",
                  "Prioritize real-world problem solving over complexity",
                  "Continuously learn and adapt to modern technologies",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 group transform transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="text-success mt-1">✓</span>
                    <span className="group-hover:text-success transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Currently Learning */}
            <article className="bg-secondary/20 p-6 rounded-xl border border-success/20 flex-1">
              <h3 className="text-3xl font-bold text-success mb-6 flex items-center gap-2">
                <FaSeedling className="text-green-400" /> Currently Exploring
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Go (Golang)",
                    icon: <SiGo className="text-xl text-cyan-400" />,
                  },
                  {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-xl text-pink-500" />,
                  },
                  {
                    name: "Apollo GraphQL",
                    icon: (
                      <SiApollographql className="text-xl text-purple-400" />
                    ),
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="text-xl text-blue-400" />,
                  },
                  {
                    name: "AWS",
                    icon: (
                      <SiAmazonwebservices className="text-xl text-orange-400" />
                    ),
                  },
                  {
                    name: "Performance Optimization",
                    icon: <FaChartLine className="text-xl text-yellow-400" />,
                  },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-2 bg-success/10 text-white rounded-full border border-success/30 hover:bg-success/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
