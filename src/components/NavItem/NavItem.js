import './NavItem.css';

import { NavLink, useLocation } from 'react-router-dom';

import { usePopups, popupActions } from '../../contexts/PopupContext';

const NavItem = ({
  path = '/',
  text,
  minWidth,
  children,
  signInButton,
  signOutButton,
}) => {
  const [popupState, popupDispatch] = usePopups();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const navItemClassName = `navbar__text ${
    isSavedNews ? 'navbar__text-dark' : ''
  }`;
  const userMenuStyle = {
    color:
      isSavedNews && popupState.isUserMenuOpen
        ? 'white'
        : isSavedNews && !popupState.isUserMenuOpen
        ? '#1a1b22'
        : '',
  };
  const activeClassName = `navbar__link navbar__link-${
    isSavedNews ? 'dark' : 'light'
  }`;

  const handleClick = (e) => {
    popupDispatch(popupActions.closeUserMenu);
  };

  return (
    <li onClick={handleClick} className={navItemClassName}>
      <NavLink
        style={{ minWidth: minWidth, ...userMenuStyle }}
        className={({ isActive }) =>
          isActive ? activeClassName : 'navbar__link'
        }
        to={path}
      >
        {text}
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
