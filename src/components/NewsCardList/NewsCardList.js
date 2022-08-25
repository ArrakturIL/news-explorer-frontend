import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { cards } from '../../utils/tempCardsData';

function NewsCardList({isLoggedin, onLogIn, onLogOut}) {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const newCards = cards.map((card) => {
      return <NewsCard card={card} key={card._id} />;
    });
    setShowCards(newCards);
  }, []);

  return (
    <>
    <Header 
        isLoggedin={isLoggedin}
        onLogIn={onLogIn}
        onLogOut={onLogOut}
    />
      <SavedNewsHeader />
      <NewsCardSection>
        <ul classNAme='news-section__container'>{showCards}</ul>
      </NewsCardSection>
    </>
  );
}

export default NewsCardList;