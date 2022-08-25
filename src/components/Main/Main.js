import './Main.css';

import { useState } from 'react';
import { useInfo } from '../../contexts/UserContext';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import useWindowSize from '../../hooks/useWindowSize';

import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AuthForm from '../AuthForm/AuthForm';
import NotFound from '../NotFound/NotFound';

const Main = () => {
  const isMobileSized = useWindowSize().width < 650;
  const { signIn } = useInfo();
  const [popupState, popupDispatch] = usePopups();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);

  const showSignUp = () => {
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignUpPopup);
  };

  const showSignIn = () => {
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignInPopup);
  };

  const handleSignUp = () => {
    popupDispatch(popupActions.openSuccessPopup);
    popupDispatch(popupActions.closeSignUpPopup);
  };

  const handleSignIn = () => {
    signIn();
    popupDispatch(popupActions.closeSignInPopup);
  };

  const handleSearchSubmit = (results) => {
    setIsSearching(true);
    setNothingFound(false);
    setSearchResults([]);
    new Promise((resolve) => {
      setTimeout(resolve, 1500);
    }).then(() => {
      if (!results || results.length === 0) {
        setNothingFound(true);
      } else {
        setSearchResults(results);
      }
      setIsSearching(false);
    });
  };

  return (
    <>
      {popupState.isSigninPopupOpen && (
        <PopupWithForm
          isOpen={popupState.isSigninPopupOpen}
          onSubmit={handleSignIn}
          isValid={true}
          formName='signin'
          title='Sign in'
          buttonText='Sign in'
          redirectText='Sign up'
          handleRedirect={showSignUp}
        >
          <AuthForm />
        </PopupWithForm>
      )}
      {popupState.isSignupPopupOpen && (
        <PopupWithForm
          withNameField
          isOpen={popupState.isSignupPopupOpen}
          onSubmit={handleSignUp}
          isValid={true}
          formName='signup'
          title='Sign up'
          buttonText='Sign up'
          redirectText='Sign in'
          handleRedirect={showSignIn}
        >
          <AuthForm />
        </PopupWithForm>
      )}
      {popupState.isSuccessPopupOpen && (
        <PopupWithForm
          hideForm={true}
          formName='success'
          isOpen={popupState.isSuccessPopupOpen}
          title='Registration successful'
          redirectText='Sign in'
          handleRedirect={showSignIn}
        />
      )}
      <section className='main'>
        <Header />
        {popupState.isUserMenuOpen && isMobileSized && <UserMenu />}
        <PageTitle />
        <SearchForm handleSearch={handleSearchSubmit} />
      </section>
      {nothingFound && <NotFound />}
      <SearchResults isSearching={isSearching} results={searchResults} />
      <About />
    </>
  );
};

export default Main;
