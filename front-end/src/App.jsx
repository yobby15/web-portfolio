import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ThemeContext from './contexts/ThemeContext';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

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
        <NavBar/>

        <section id="Hero">
          <Hero/>
        </section>
        
        <section id="About">
          <About/>
        </section>
        
        <section id="Skills">
          <Skills/>
        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;