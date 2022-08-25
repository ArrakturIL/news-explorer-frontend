import './App.css';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';

import { usePopups, popupActions } from '../../contexts/PopupContext';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router';

function App() {
  const [, popupDispatch] = usePopups();

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
        <Route path='/' element={<Main />} />
        <Route path='/saved-articles' element={<NewsCardList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
