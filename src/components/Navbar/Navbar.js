import Hamburger from '../Hamburger/Hamburger';
import './Navbar.css';
import UseWindowSize from '../../hooks/UseWindowSize';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  const isMobileSized = UseWindowSize().width < 650;

  return isMobileSized ? <Hamburger /> : <NavItems />;
};

export default Navbar;
