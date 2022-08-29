import './Logo.css';
import { useLocation, Link } from 'react-router-dom';
import { usePopups, popupActions } from '../../contexts/PopupContext';

const Logo = () => {
  const [popupState, popupDispatch] = usePopups();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const logoClassName = `logo-text logo-text__${
    isSavedNews && !popupState.isUserMenuOpen ? 'dark' : 'light'
  }`;

  return (
    <Link to='/' onClick={() => popupDispatch(popupActions.closeAll)}>
      <p className={logoClassName}>NewsExplorer</p>
    </Link>
  );
};

export default Logo;
