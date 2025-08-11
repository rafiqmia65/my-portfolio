import ThemeToggle from "./ThemeToggle";
import logo from "../../../../assets/MR.png";

const MobileNavbar = ({ navLinks, activeLink, theme, onThemeToggle }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full z-50 p-4">
      <div className="flex justify-between items-center w-full px-4 py-3 rounded-full bg-primary bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl border-1 border-secondary/20 transition-all duration-500 hover:bg-opacity-20">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-xl font-bold text-primary cursor-pointer">
          <img className="w-10 h-8 rounded-lg" src={logo} alt="Logo" />
        </div>

        {/* Menu Link & Theme */}
        <div className="flex justify-around items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`p-3 rounded-full transition-all duration-300 
  ${
    activeLink === link.href.replace("#", "")
      ? "bg-white text-success shadow-lg"
      : "text-white hover:bg-white hover:text-success"
  }`}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
