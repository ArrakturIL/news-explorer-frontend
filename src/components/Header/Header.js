import './Header.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePopups } from '../../contexts/PopupContext';
import { MAX_MOBILE_SIZE } from '../../utils/constants';
import UseWindowSize from '../../hooks/UseWindowSize';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [popupState] = usePopups();
  const [headerClassName, setHeaderClassName] = useState('header');
  const isMobileSized = UseWindowSize().width < MAX_MOBILE_SIZE;
  const isSavedNews = useLocation().pathname === '/saved-articles';

  useEffect(() => {
    if (isMobileSized) {
      setHeaderClassName(
        `header ${
          popupState.isUserMenuOpen
            ? 'header_type_dark'
            : popupState.isSigninPopupOpen || popupState.isSignupPopupOpen
            ? 'header__hidden'
            : ''
        }`
      );
    } else {
      setHeaderClassName('header');
    }
  }, [
    popupState.isUserMenuOpen,
    popupState.isSigninPopupOpen,
    popupState.isSignupPopupOpen,
    isMobileSized,
    isSavedNews,
  ]);

  return (
    <header className={headerClassName}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
