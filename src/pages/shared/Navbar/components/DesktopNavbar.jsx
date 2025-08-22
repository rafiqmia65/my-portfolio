import { Link, useLocation } from "react-router";
import logo from "../../../../assets/MR.png";
import ThemeToggle from "./ThemeToggle";
import { FaDownload } from "react-icons/fa";

const DesktopNavbar = ({ navLinks, theme, onThemeToggle }) => {
  const location = useLocation();
  const currentHash = location.hash.replace("#", "");
  // const resumeUrl = "/Resume.pdf";

  return (
    <div className="hidden lg:block fixed top-0 left-0 w-full z-50 p-4">
      <div className="bg-secondary container mx-auto flex justify-between items-center px-6 py-4 rounded-full backdrop-filter backdrop-blur-lg shadow-xl transition-all duration-500">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-xl font-bold text-primary cursor-pointer">
          <Link to="/">
            <img className="w-10 h-8 rounded-lg" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Menu Link */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={{
                pathname: "/",
                hash: link.href,
              }}
              className={`text-base font-medium transition-all duration-300 relative group
                ${
                  currentHash === link.href.replace("#", "")
                    ? "text-success"
                    : "text-white hover:text-success"
                }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-success transform transition-transform duration-300
                ${
                  currentHash === link.href.replace("#", "")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a
            href={`https://drive.google.com/file/d/1qpEHK-46o8DuH7AAehZ2ImEN3QJ5GYdo/view`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-success/80 hover:bg-success/40 text-[#fff] font-semibold transition-all shadow-lg transform duration-300"
          >
            <FaDownload className="text-lg" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
