import './UserMenu.css';
import NavItem from '../NavItem/NavItem';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import { useInfo } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import SignOutButton from '../SignOutButton/SignOutButton';
import SignInButton from '../SignInButton/SignInButton';

const UserMenu = () => {
  const [, popupDispatch] = usePopups();
  const { currentUser } = useInfo();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const routeToPath = isSavedNews ? '/' : '/saved-articles';
  const displayPath = isSavedNews ? 'Home' : 'Save news';

  const handleOverlayClick = () => {
    popupDispatch(popupActions.closeUserMenu);
  };

  return (
    <>
      <ul className='user-menu'>
        <NavItem noDecoration path={routeToPath} text={displayPath} />
        {currentUser.isLoggedIn ? (
          <SignOutButton inUserMenu />
        ) : (
          <SignInButton inUserMenu />
        )}
      </ul>
      <div onClick={handleOverlayClick} className='user-menu__overlay'></div>
    </>
  );
};

export default UserMenu;
