import Hamburger from '../Hamburger/Hamburger';
import './Navbar.css';
import useWindowSize from '../../hooks/useWindowSize';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  const isMobileSized = useWindowSize().width < 650;

  return isMobileSized ? <Hamburger /> : <NavItems />;
};

export default Navbar;
