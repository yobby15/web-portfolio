import { Sun, Moon } from 'lucide-react';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

function ToggelTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme === 'dark' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  ) 
}

export default ToggelTheme;