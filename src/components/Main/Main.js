import './Main.css';

import { useState, useEffect } from 'react';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import { MAX_MOBILE_SIZE } from '../../utils/constants';
import UseWindowSize from '../../hooks/UseWindowSize';

import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ConnectioError from '../ConnectionError/ConnectionError';
import Success from '../Success/Success';
import NotFound from '../NotFound/NotFound';

const Main = ({
  handleSignIn,
  handleSignUp,
  responseError,
  setResponseError,
}) => {
  const isMobileSized = UseWindowSize().width < MAX_MOBILE_SIZE;
  const [popupState, popupDispatch] = usePopups();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [connectionError, setConnectionError] = useState(false);

  const showSignUp = () => {
    setResponseError(null);
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignUpPopup);
  };

  const showSignIn = () => {
    setResponseError(null);
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignInPopup);
  };

  const handleSearchSubmit = (results, keyword) => {
    setSearchKeyword(keyword);
    setNothingFound(false);
    setSearchResults([]);
    if (!results || results.length === 0) {
      setNothingFound(true);
    } else {
      setSearchResults(results);
      localStorage.setItem(
        'searchResults',
        JSON.stringify({ results, keyword })
      );
    }
  };

  useEffect(() => {
    const searchResults = localStorage.getItem('searchResults');
    if (searchResults) {
      const { results, keyword } = JSON.parse(searchResults);
      setSearchResults(results);
      setSearchKeyword(keyword);
    }
  }, []);

  return (
    <>
      {popupState.isSigninPopupOpen && (
        <Login
          handleSignIn={handleSignIn}
          showSignUp={showSignUp}
          responseError={responseError}
        />
      )}
      {popupState.isSignupPopupOpen && (
        <Register
          handleSignUp={handleSignUp}
          showSignIn={showSignIn}
          responseError={responseError}
        />
      )}
      {popupState.isSuccessPopupOpen && <Success showSignIn={showSignIn} />}
      <section className='main'>
        <Header />
        {popupState.isUserMenuOpen && isMobileSized && <UserMenu />}
        <PageTitle />
        <SearchForm
          handleSearch={handleSearchSubmit}
          setIsSearching={setIsSearching}
          connectionError={setConnectionError}
        />
      </section>
      {nothingFound && <NotFound />}
      {connectionError && <ConnectioError />}
      <SearchResults
        isSearching={isSearching}
        results={searchResults}
        keyword={searchKeyword}
      />
      <About />
    </>
  );
};

export default Main;
