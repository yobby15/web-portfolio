import NavLinks from './NavLinks';
import ToggelTheme from "./ToggleTheme";

function NavBar() {
  return (
    <nav className="navbar-theme h-15 fixed top-0 left-0 w-full flex justify-between items-center px-12 py-4 z-50 border-b border-white/5">
      <button>
        Yobby Novialdi
      </button>

      <NavLinks/>
    
      <ToggelTheme/>
    </nav>
  )
}

export default NavBar;