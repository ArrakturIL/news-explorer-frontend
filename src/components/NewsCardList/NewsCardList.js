import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';
import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';

import UseWindowSize from '../../hooks/UseWindowSize';

import { mainApi } from '../../utils/MainApi';
import { usePopups } from '../../contexts/PopupContext';
import { useEffect } from 'react';
import { useInfo } from '../../contexts/UserContext';
import { MAX_MOBILE_SIZE } from '../../utils/constants';

const NewsCardList = () => {
  // const [displayCards, setDisplayCards] = useState([]);
  const [popupState] = usePopups();
  const isMobileSized = UseWindowSize().width < MAX_MOBILE_SIZE;
  const { savedCards, setSavedCardsState } = useInfo();

  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((cards) => {
        setSavedCardsState(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setSavedCardsState]);

  return (
    <>
      <Header />
      {popupState.isUserMenuOpen && isMobileSized && <UserMenu />}
      <SavedNewsHeader />
      <NewsCardSection>
        <ul className='news-section__container'>
          {savedCards.map((card) => (
            <NewsCard key={card.id} {...card} />
          ))}
        </ul>
      </NewsCardSection>
    </>
  );
};

export default NewsCardList;
