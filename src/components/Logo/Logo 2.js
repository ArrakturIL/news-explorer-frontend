import './Logo.css';
import { useLocation, Link } from 'react-router-dom';
import { usePopups, popupActions } from '../../contexts/PopupContext';

const Logo = () => {
  const [popupState, popupDispatch] = usePopups();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const logoClassName = `logo-text logo-text_${
    isSavedNews && !popupState.isUserMenuOpen ? 'dark' : 'light'
  }`;

  return (
    <Link to='/' onClick={() => popupDispatch(popupActions.closeAll)}>
      <span className={logoClassName}>NewsExplorer</span>
    </Link>
  );
};

export default Logo;
