import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';
import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';
import { usePopups } from '../../contexts/PopupContext';
import UseWindowSize from '../../hooks/UseWindowSize';
import { useEffect, useState } from 'react';
import { savedCards } from '../../utils/tempCardsData';

const NewsCardList = () => {
  const [displayCards, setDisplayCards] = useState([]);
  const [popupState] = usePopups();
  const isMobileSized = UseWindowSize().width < 650;

  useEffect(() => {
    const newCards = savedCards.map((card, i) => (
      <NewsCard key={i} {...card} />
    ));
    setDisplayCards(newCards);
  }, []);

  return (
    <>
      <Header />
      {popupState.isUserMenuOpen && isMobileSized && <UserMenu />}
      <SavedNewsHeader />
      <NewsCardSection>
        <ul className='news-section__container'>{displayCards}</ul>
      </NewsCardSection>
    </>
  );
};

export default NewsCardList;
