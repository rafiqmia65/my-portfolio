import React from "react";
import { FaLightbulb, FaSeedling, FaStar, FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGraphql, SiDocker } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-20 bg-primary/98 text-white"
    >
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
                  Frontend Developer
                </strong>{" "}
                passionate about building modern, responsive, and user-friendly
                web interfaces using{" "}
                <strong className="font-bold">React</strong>. I have a solid
                foundation in HTML, CSS, and JavaScript, and I am dedicated to
                creating clean, performant, and accessible code.
              </p>
              <p>
                My passion for development extends to the full stack, where I
                have practical experience with the MERN stack—specifically{" "}
                <strong className="font-bold">Node.js</strong>,{" "}
                <strong className="font-bold">Express.js</strong>, and{" "}
                <strong className="font-bold">MongoDB</strong>. This allows me
                to build robust, end-to-end solutions and understand the full
                lifecycle of a web application.
              </p>
              <p>
                I am a firm believer in continuous learning. Currently, I am
                expanding my skills by mastering{" "}
                <strong className="font-bold">Next.js</strong> and{" "}
                <strong className="font-bold">TypeScript</strong> to build
                scalable, server-side rendered applications and write more
                maintainable code.
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
                  "User-first design approach",
                  "Clean, modular code architecture",
                  "Performance optimization",
                  "Accessibility as priority",
                  "Continuous learning mindset",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
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
                    name: "Next.js 14",
                    icon: <SiNextdotjs className="text-xl" />,
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-xl text-blue-500" />,
                  },
                  {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-xl text-pink-500" />,
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="text-xl text-blue-400" />,
                  },
                  {
                    name: "AWS Basics",
                    icon: <FaAws className="text-xl text-orange-500" />,
                  },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-2 bg-success/10 text-success rounded-full border border-success/30 hover:bg-success/20 transition-colors flex items-center gap-2"
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
