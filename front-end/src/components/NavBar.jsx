import { Sun, Moon } from 'lucide-react';
import ThemeContext from '../contexts/ThemeContext';
import { useContext } from 'react';

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isLightMode = theme === 'light';

  const BgColor = isLightMode ? "bg-[#FFF8DE]" : "bg-[#872341]";

  return (
    <nav className={`w-full flex justify-between items-center px-6 py-4 ${BgColor}`}>
      <div className="flex-1">
        <h1>
          Yobby Novialdi
        </h1>
      </div>
      <div className="flex flex-1 gap-8">
        <button>
          About
        </button>
        <button>
          Skills
        </button>
        <button>
          Projects
        </button>
        <button>
          Experiences
        </button>
        <button>
          Contact
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <button onClick={toggleTheme} className="">
          {theme === 'dark' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </div>
    </nav>
  )
}

export default NavBar;