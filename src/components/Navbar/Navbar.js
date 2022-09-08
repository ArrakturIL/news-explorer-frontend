import Hamburger from '../Hamburger/Hamburger';
import './Navbar.css';
import UseWindowSize from '../../hooks/UseWindowSize';
import NavItems from '../NavItems/NavItems';
import {MAX_MOBILE_SIZE} from '../../utils/constants';
const Navbar = () => {
  const isMobileSized = UseWindowSize().width < MAX_MOBILE_SIZE;

  return isMobileSized ? <Hamburger /> : <NavItems />;
};

export default Navbar;
