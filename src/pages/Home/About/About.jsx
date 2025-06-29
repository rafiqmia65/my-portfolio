import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-darkAccent text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {/* Left Column - Intro */}
          <div className="space-y-5">
            <p>
              I'm a <strong className="text-primary">Frontend Developer</strong>{" "}
              passionate about building modern, responsive, and user-friendly
              web interfaces using <strong>React</strong>.
            </p>
            <p>
              Alongside my frontend expertise, I also have practical experience
              with <strong>MongoDB</strong> and <strong>Express.js</strong>,
              enabling me to contribute to full-stack solutions when needed.
            </p>
            <p>
              Currently, I'm expanding my skill set by learning{" "}
              <strong>Next.js</strong> and <strong>TypeScript</strong> to become
              even more versatile within the React ecosystem.
            </p>
          </div>

          {/* Right Column - What I'm Working On */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-primary dark:text-darkHighlight mb-2">
              🔭 What I'm Working On
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                🌱 Learning <strong>TypeScript</strong> and{" "}
                <strong>Next.js</strong>
              </li>
              <li>🛠 Exploring best practices in frontend architecture</li>
              <li>📘 Building reusable components & UI libraries</li>
              <li>🤝 Looking to collaborate on open-source React projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
