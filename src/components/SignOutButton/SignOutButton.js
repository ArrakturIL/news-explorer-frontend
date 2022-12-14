import './SignOutButton.css';
import logOutIcon from '../../images/icons/logout.svg';
import logOutIconWhite from '../../images/icons/logout-light.svg';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import { useInfo } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';

const SignOutButton = ({ inUserMenu }) => {
  const [popupState, popupDispatch] = usePopups();
  const { currentUser, signOut } = useInfo();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const userName = currentUser.name;
  const wrapperClassName = `navbar__sign-out-wrapper ${
    inUserMenu
      ? ' navbar__sign-out-wrapper_in_type_menu'
      : !isSavedNews
      ? ' navbar__sign-out-wrapper_in_type_main'
      : ''
  }`;
  const buttonClassName = `navbar__sign-out-button ${
    isSavedNews && !popupState.isUserMenuOpen
      ? ' navbar__sign-out-button_type_saved-news'
      : ''
  }`;

  const handleClick = () => {
    signOut();
    localStorage.removeItem('jwt');
    popupDispatch(popupActions.closeUserMenu);
  };

  return (
    <li onClick={handleClick} className={wrapperClassName}>
      <button className={buttonClassName}>{userName}</button>
      <img
        className='navbar__sign-out-icon'
        alt='logout'
        src={
          isSavedNews && !popupState.isUserMenuOpen
            ? logOutIcon
            : logOutIconWhite
        }
      />
    </li>
  );
};

export default SignOutButton;
