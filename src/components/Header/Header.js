import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { isLoggedin, onLogIn, onLogOut, popupIsOpen } = props;

  const { pathname } = useLocation();
  const lightHeader = pathname === '/saved-news';

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleHamburger = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleNavClick = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    setIsDropDownOpen(false);
  }, [setIsDropDownOpen]);

  return (
    <header
      className={`header 
      ${lightHeader ? 'header__light' : ''} 
      ${popupIsOpen ? 'header__hidden' : ''}
      `}
    >
      <div
        className={`overlay ${isDropDownOpen ? 'overlay__visible' : ''}`}
        onClick={toggleHamburger}
      />
      <div
        className={`header__content
        ${lightHeader ? 'header__content_light' : ''}
        ${isDropDownOpen && !lightHeader ? 'header__content_dark' : ''}
        `}
      >
        <a href='/'>
          <span
            className={`header__logo ${
              lightHeader ? 'header__logo_light' : 'header__logo_dark'
            }`}
          >
            NewsExplorer§
          </span>
        </a>
        <button
          className={`
          ${
            lightHeader
              ? 'header__menu header__menu_dark'
              : 'header__menu header__menu_light'
          }
          ${isDropDownOpen ? 'header__close' : ''}
          ${isDropDownOpen && lightHeader ? 'header__close_dark' : ''}
          `}
          onClick={toggleHamburger}
        />
        <Navigation
          isDropDownOpen={isDropDownOpen}
          onClick={handleNavClick}
          onLogIn={onLogIn}
          onLogOut={onLogOut}
          isLoggedin={isLoggedin}
          lightHeader={lightHeader}
        />
      </div>
    </header>
  );
}

export default Header;