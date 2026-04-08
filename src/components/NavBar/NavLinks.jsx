import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Link } from 'react-scroll';

function NavLinks() {
  const menus = ['About', 'Skills', 'Projects', 'Experiences', 'Contact'];

  return (
    <div className="hidden md:flex gap-8">
      {menus.map((menu) => (
        <Link
          key={menu}
          className="nav-link"
          smooth={true}
          duration={600}
          to={menu}
          offset={-70}
        >
          {menu}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
