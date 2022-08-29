

import './Header.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePopups } from '../../contexts/PopupContext';
import UseWindowSize from '../../hooks/UseWindowSize';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [popupState] = usePopups();
  const [headerClassName, setHeaderClassName] = useState('header');
  const isMobileSized = UseWindowSize().width < 650;
  const isSavedNews = useLocation().pathname === '/saved-articles';

  useEffect(() => {
    if (isMobileSized) {
      setHeaderClassName(
        `header ${popupState.isUserMenuOpen ? 'header_dark' : ''}`
      );
    } else {
      setHeaderClassName('header');
    }
  }, [popupState.isUserMenuOpen, isMobileSized, isSavedNews]);

  return (
    <header className={headerClassName}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;