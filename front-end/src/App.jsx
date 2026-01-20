import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ThemeContext from './contexts/ThemeContext';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

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
          <Hero>
            
          </Hero>
        </section>
        <section>
          <About>
            
          </About>
        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;