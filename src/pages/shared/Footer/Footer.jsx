import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary text-base-content py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-4">
        {/* Left: Name & Year */}
        <div className="text-center lg:text-left text-sm font-semibold text-white">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary">Md Rafiq Mia</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
