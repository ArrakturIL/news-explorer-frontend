import './Hamburger.css';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import { useLocation } from 'react-router';

const Hamburger = () => {
  const [popupState, popupDispatch] = usePopups();
  const isSavedNews = useLocation().pathname === '/saved-articles';
  const burgerClassName = `hamburger ${
    isSavedNews && !popupState.isUserMenuOpen
      ? 'hamburger__dark'
      : 'hamburger__light'
  }`;
  const closeBtnClassName = `close-btn ${
    isSavedNews && !popupState.isUserMenuOpen
      ? 'close-btn__dark'
      : 'close-btn__light'
  }`;

  const displayButton = () =>
    popupState.isUserMenuOpen ? closeBtnClassName : burgerClassName;

  const handleBurgerClick = () => {
    popupDispatch(popupActions.toggleUserMenu);
  };

  return <button onClick={handleBurgerClick} className={displayButton()} />;
};

export default Hamburger;
