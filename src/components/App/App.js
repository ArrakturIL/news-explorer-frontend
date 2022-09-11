import './App.css';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { usePopups, popupActions } from '../../contexts/PopupContext';
import { useInfo } from '../../contexts/UserContext';
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  // Navigate,
  useNavigate,
  useLocation,
} from 'react-router';

function App() {
  const [, popupDispatch] = usePopups();
  const { currentUser, /*setSavedCardsState,*/ signIn } = useInfo();
  const [responseError, setResponseError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        mainApi.updateToken(user.token);
        signIn(user.name);
        popupDispatch(popupActions.closeSignInPopup);
        // mainApi.getSavedArticles().then((cards) => {
        //   setSavedCardsState(cards);
        // });
      })
      .catch((err) => {
        console.log(err);
        setResponseError(err.message);
      });
  };

  const handleSignUp = ({ email, password, username }) => {
    auth
      .register(email, password, username)
      .then(() => {
        popupDispatch(popupActions.closeSignUpPopup);
        popupDispatch(popupActions.openSuccessPopup);
      })
      .catch((err) => {
        console.log(err);
        setResponseError(err.message);
      });
  };

  useEffect(() => {
    if (!currentUser.isLoggedIn && location.pathname === '/saved-articles') {
      navigate('/');
      popupDispatch(popupActions.openSignUpPopup);
    }
  }, [currentUser.isLoggedIn, location.pathname, navigate, popupDispatch]);

 useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getContent(jwt)
        .then((user) => {
          signIn(user.name);
          mainApi.updateToken(jwt);
          // mainApi.getSavedArticles().then((cards) => {
          //   setSavedCardsState(cards);
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    const closeByEsc = (e) => {
      e.key === 'Escape' && popupDispatch(popupActions.closeAll);
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [popupDispatch]);

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              responseError={responseError}
              setResponseError={setResponseError}
              handleSignUp={handleSignUp}
              handleSignIn={handleSignIn}
            />
          }
        />
        <Route
          path='/saved-articles'
          element={
            <ProtectedRoute
              isLoggedIn={currentUser.isLoggedIn}
              redirectPath='/'
            >
              <NewsCardList />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
