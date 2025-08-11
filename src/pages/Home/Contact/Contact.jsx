import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-success mb-4">
          Get <span className="text-white">in</span> Touch
        </h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          I'm currently available for new projects. Whether you have a question
          or just want to say hi, feel free to reach out. I'll get back to you
          as soon as possible!
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Send me a message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 bg-secondary border border-success/60  text-white placeholder-success rounded-lg outline-none focus:border-success transition-colors duration-200"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 bg-secondary border border-success/60  text-white placeholder-success rounded-lg outline-none focus:border-success transition-colors duration-200"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-5 py-3 bg-secondary border border-success/60  text-white placeholder-success rounded-lg outline-none focus:border-success transition-colors duration-200"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-success/80 hover:bg-success/80 text-[#fff] font-bold tracking-wide transition-all px-8 py-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10 lg:ml-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Direct Contact
              </h3>
              <div className="space-y-5">
                {/* Email Icon with slide-to-right on hover */}
                <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 transform hover:translate-x-3">
                  <FaEnvelope className="text-red-500 text-2xl group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    rafiqdeveloper4465@gmail.com
                  </span>
                </div>

                {/* Phone Icon with slide-to-right on hover */}
                <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 transform hover:translate-x-3">
                  <FaPhone className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    +880 1741134465
                  </span>
                </div>

                {/* WhatsApp Icon with slide-to-right on hover */}
                <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 transform hover:translate-x-3">
                  <FaWhatsapp className="text-green-500 text-2xl group-hover:text-green-400 transition-colors" />
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    +880 1785489196
                  </span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-secondary p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Find me on Socials
              </h3>

              <div className="flex justify-center gap-8">
                {/* GitHub */}
                <div className="relative group">
                  <a
                    href="https://github.com/rafiqmia65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    title="GitHub"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-900 group-hover:bg-gray-800 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 shadow-md">
                      <FaGithub className="text-white text-2xl" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      GitHub
                    </span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="relative group">
                  <a
                    href="https://www.linkedin.com/in/rafiqmia65/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-700 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 shadow-md">
                      <FaLinkedin className="text-white text-2xl" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      LinkedIn
                    </span>
                  </a>
                </div>

                {/* Twitter */}
                <div className="relative group">
                  <a
                    href="https://x.com/rafiqmia65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    title="Twitter"
                  >
                    <div className="w-12 h-12 rounded-full bg-black group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 shadow-md">
                      <FaTwitter className="text-white text-2xl" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Twitter
                    </span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="relative group">
                  <a
                    href="https://wa.me/8801785489196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-600 group-hover:bg-green-500 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 shadow-md">
                      <FaWhatsapp className="text-white text-2xl" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
