import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div>
        <NavBar>
          
        </NavBar>
        <section>

        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;