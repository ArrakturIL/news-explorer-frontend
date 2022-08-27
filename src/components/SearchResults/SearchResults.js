import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';

import { useEffect, useState } from 'react';

const SearchResults = ({ isSearching, searchResults }) => {
  const [displaySets, setDisplaySets] = useState(0);
  const [displayCards, setDisplayCards] = useState([]);

  const getDisplayCards = (cardArray, count = 1, size = 3) => {
    const lastIndex = count * size - 1;
    const cardsToDisplay = cardArray.slice(0, lastIndex + 1);
    return cardsToDisplay.map((card, i) => (
      <NewsCard key={i} {...card}></NewsCard>
    ));
  };

  const handleShowmoreClick = () => {
    const nextThree = getDisplayCards(searchResults, displaySets + 1);
    setDisplaySets(displaySets + 1);
    setDisplayCards(nextThree);
  };

  useEffect(() => {
    setDisplaySets(0);
    setDisplayCards([]);
    if (searchResults?.length !== 0) {
      const newCards = getDisplayCards(searchResults);
      setDisplayCards(newCards);
      setDisplaySets(1);
    }
  }, [searchResults]);

  return (
    <>
      {isSearching && <Preloader text='Searching for news...' />}
      {displaySets !== 0 && (
        <NewsCardSection>
          {displaySets !== 0 && (
            <h2 className='news-section__title'>Search results</h2>
          )}
          <ul className='news-section__container'>{displayCards}</ul>
          {!isSearching && (
            <button
              type='button'
              className='show-more'
              onClick={handleShowmoreClick}
            >
              Show more
            </button>
          )}
        </NewsCardSection>
      )}
    </>
  );
};

export default SearchResults;
