import './NavItems.css';
import NavItem from '../NavItem/NavItem';
import { useInfo } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import SignOutButton from '../SignOutButton/SignOutButton';
import SignInButton from '../SignInButton/SignInButton';

const NavItems = () => {
  const { currentUser } = useInfo();
  const isSavedNews = useLocation().pathname === '/saved-articles';

  return (
    <nav className={`navbar ${isSavedNews ? 'navbar_type_dark' : ''}`}>
      <ul className='navbar__list'>
        <NavItem text={'Home'} path={'/'} minWidth='64px' />
        {currentUser.isLoggedIn && (
          <NavItem
            text={'Saved articles'}
            path={'/saved-articles'}
            minWidth='160px'
          />
        )}
        {currentUser.isLoggedIn ? (
          <SignOutButton userName={currentUser.name} />
        ) : !isSavedNews ? (
          <SignInButton />
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default NavItems;
