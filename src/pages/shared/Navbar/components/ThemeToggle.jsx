import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-full transition-all duration-300 bg-success text-white cursor-pointer hover:bg-success/80"
      title="Toggle Theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
