import './SavedNewsHeader.css';
import { useEffect, useState } from 'react';
import { cards, tempKeywords } from '../../utils/tempCardsData';
import { parseKeyword } from '../../utils/parseKeyword';
import { useInfo } from '../../contexts/UserContext';

const SavedNewsHeader = () => {
  const { currentUser } = useInfo();
  const [savedNews, setSavedNews] = useState([]);
  const [keywords, setkeywords] = useState('');

  useEffect(() => {
    const keywordsSting = parseKeyword(tempKeywords);
    setkeywords(keywordsSting);
    setSavedNews(cards);
  }, []);

  return (
    <section className='saved-news__header'>
      <h2 className='saved-news__header-title'>Saved News</h2>
      <span className='saved-news__count'>
        {currentUser.name || 'John Doe'} you have {savedNews.length} saved news
      </span>
      <span className='saved-news__keywords'>By keywords:</span>
      <span className='saved-news__keywords saved-news__keywords_list'>
        {keywords}
      </span>
    </section>
  );
};

export default SavedNewsHeader;
