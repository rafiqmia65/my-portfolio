import logo from "../../../../assets/MR.png";
import ThemeToggle from "./ThemeToggle";

const DesktopNavbar = ({ navLinks, activeLink, theme, onThemeToggle }) => {
  return (
    <div className="hidden lg:block fixed top-0 left-0 w-full z-50 p-4">
      <div className="bg-primary container mx-auto flex justify-between items-center px-6 py-4 rounded-full backdrop-filter backdrop-blur-lg shadow-xl border-2 border-secondary transition-all duration-500">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-xl font-bold text-primary cursor-pointer">
          <img className="w-10 h-8 rounded-lg" src={logo} alt="Logo" />
        </div>

        {/* Menu Link */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-all duration-300 relative group
                ${
                  activeLink === link.href.replace("#", "")
                    ? "text-success"
                    : "text-white hover:text-success"
                }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-success transform transition-transform duration-300
                ${
                  activeLink === link.href.replace("#", "")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/*Theme toggle button */}
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
