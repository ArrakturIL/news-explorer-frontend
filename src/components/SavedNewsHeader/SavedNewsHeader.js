import './SavedNewsHeader.css';
import { useEffect, useState } from 'react';
// import { exampleCards, exampleKeywords } from '../../utils/tempCardsData';
import { parseKeyword } from '../../utils/parseKeyword';
import { useInfo } from '../../contexts/UserContext';

const SavedNewsHeader = () => {
  const { currentUser, savedCards } = useInfo();
  // const [savedNews, setSavedNews] = useState([]);
  const [keywords, setkeywords] = useState('');

  useEffect(() => {
    const keywordsSting = savedCards.map((card) => card.keyword);
    setkeywords(parseKeyword(keywordsSting));
  }, [savedCards]);

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved News</h2>
      <p className='saved-news-header__count'>
        {currentUser.name || 'John Doe'} you have {savedCards.length} saved news
      </p>
      <p className='saved-news-header__keywords'>By keywords:</p>
      <p className='saved-news-header__keywords saved-news-header__keywords-list'>
        {keywords}
      </p>
    </section>
  );
};

export default SavedNewsHeader;
