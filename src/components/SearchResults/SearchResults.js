import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NewsCardSection from '../NewsCardSection/NewsCardSection';

import { useInfo } from '../../contexts/UserContext';

import { useEffect, useState, useCallback } from 'react';

const SearchResults = ({ isSearching, results, keyword }) => {
  const [displaySets, setDisplaySets] = useState(0);
  const [displayCards, setDisplayCards] = useState([]);
  const { savedCards } = useInfo();

  const getDisplayCards = useCallback(
    (cardArray, count = 1, size = 3) => {
      const lastIndex = count * size - 1;
      const cardsToDisplay = cardArray.slice(0, lastIndex + 1).map((card) => {
        const saved = savedCards.find(
          (savedCard) => savedCard.url === card.url
        );
        const id = saved?.id;
        return {
          ...card,
          id,
          isSaved: savedCards.some((savedCard) => savedCard.url === card.url),
        };
      });
      return cardsToDisplay;
    },
    [savedCards]
  );

  const handleShowmoreClick = () => {
    const nextThree = getDisplayCards(results, displaySets + 1);
    setDisplaySets(displaySets + 1);
    setDisplayCards(nextThree);
  };

  useEffect(() => {
    setDisplaySets(0);
    setDisplayCards([]);
    if (results?.length !== 0) {
      setDisplayCards(getDisplayCards(results));
      setDisplaySets(1);
    }
  }, [results, getDisplayCards]);

  return (
    <>
      {isSearching && <Preloader text='Searching for news...' />}
      {!isSearching && displaySets === 0 && (
        <NewsCardSection>
          {displaySets !== 0 && (
            <h2 className='news-section__title'>Search results</h2>
          )}
          <ul className='news-section__container'>
            {displayCards.map((card) => (
              <NewsCard
                key={card?.source?.name || card.id + card.publishedAt}
                keyword={keyword}
                {...card}
              />
            ))}
          </ul>
          {!isSearching && displayCards.length < results.length && (
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
