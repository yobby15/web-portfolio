import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Link } from 'react-scroll';

function NavLinks() {
  const { theme } = useContext(ThemeContext);
  const menus = ['About', 'Skills', 'Projects', 'Experiences', 'Contact'];

  return (
    <div className="flex gap-8">
      {menus.map((menu) => (
        <Link 
          key={menu} 
          className={` cursor-pointer transition-colors duration-300 ${theme === 'dark' ? 'hover:text-[#2563EB]' : 'hover:text-[#93C5FD]'}`}
          smooth={true}
          duration={500}
          to={menu}
          offset={-60}
          >
          {menu}
        </Link>
      ))}
    </div>
  )
}

export default NavLinks;