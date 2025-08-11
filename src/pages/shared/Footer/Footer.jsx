import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary/98 pb-10 px-6 sm:px-4 lg:px-0 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center border-t border-success pt-8 gap-6">
          {/* Left: Copyright */}
          <div className="text-center md:text-center text-lg font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-success font-bold">Md Rafiq Mia</span>. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
