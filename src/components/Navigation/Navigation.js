import React, { useContext } from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import logoutDark from '../../images/icons/logout-dark.svg';
import logoutLight from '../../images/icons/logout-light.svg';

function Navigation(props) {
  const { isLoggedIn, onLogIn, onLogOut, isDropDownOpen } = props;

  const currentUser = useContext(CurrentUserContext);

  const { pathname } = useLocation();
  const lightHeader = pathname === '/saved-news';

  return (
    <nav
      className={`nav ${isDropDownOpen ? 'nav__open' : ''} 
      ${isDropDownOpen && isLoggedIn ? 'nav__open_user' : ''}`}
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav__link nav__link_active' : 'nav__link'
        }
        to={'/'}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link_active' : 'nav__link'
          }
          to={'/saved-news'}
        >
          Saved Articles
        </NavLink>
      )}
      {!isLoggedIn ? (
        <button
          onClick={onLogIn}
          className={`nav__button ${
            lightHeader ? 'nav__button_light' : 'nav__button_dark'
          }`}
        >
          Sign In
        </button>
      ) : (
        <button
          onClick={onLogOut}
          className={`nav__button nav__button_user ${
            lightHeader ? 'nav__button_light' : 'nav__button_dark'
          }`}
        >
          {currentUser.name}
          <img
            className='nav__logout'
            src={lightHeader ? logoutDark : logoutLight}
            alt='logout icon'
          />
        </button>
      )}
    </nav>
  );
}

export default Navigation;