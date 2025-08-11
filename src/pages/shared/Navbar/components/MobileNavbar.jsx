import { Link, useLocation } from "react-router";
import ThemeToggle from "./ThemeToggle";

const MobileNavbar = ({ navLinks, theme, onThemeToggle }) => {
  const location = useLocation();
  const currentHash = location.hash.replace("#", "");

  return (
    <div className="lg:hidden fixed top-0 left-0 w-full z-50 p-4">
      <div className="flex justify-between items-center w-full px-4 py-3 rounded-full bg-secondary bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl transition-all duration-500 hover:bg-opacity-20">
        <div className="flex justify-around items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={{
                pathname: "/",
                hash: link.href,
              }}
              className={`p-3 rounded-full transition-all duration-300 
                ${
                  currentHash === link.href.replace("#", "")
                    ? "bg-white text-secondary shadow-lg"
                    : "text-white hover:bg-secondary hover:text-success"
                }`}
              title={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
