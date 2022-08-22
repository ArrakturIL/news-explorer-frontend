import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';
import { useEffect, useState } from 'react';
import { cards } from '../../utils/tempCardsData';

function NewsCardList() {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const newCards = cards.map((card) => {
      return <NewsCard card={card} key={card._id} />;
    });
    setShowCards(newCards);
  }, []);

  return (
    <>
      <SavedNewsHeader />
      <NewsCardSection>
        <ul classNAme='news-section__container'>{showCards}</ul>
      </NewsCardSection>
    </>
  );
}

export default NewsCardList;