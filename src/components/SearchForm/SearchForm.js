import './SearchForm.css';
import { newsApi } from '../../utils/NewsApi';
import { useState } from 'react';
// import { exampleCards } from '../../utils/tempCardsData';

const SearchForm = ({
  buttonText = 'Search',
  handleSearch,
  setIsSearching,
  connectionError,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter topic');
  const [inputClassName, setInputClassName] = useState('search-form__input');
  // const [isRequestSent, setIsRequestSent] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;
    setPlaceholder('Enter topic');
    setInputClassName('search-form__input');
    setSearchQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    connectionError(false);
    if (!searchQuery) {
      setPlaceholder('Please enter a keyword');
      setInputClassName('search-form__input search-form__input_error');

      return;
    }

    setIsSearching(true);

    newsApi
      .getRequestNews(searchQuery)
      .then((res) => {
        const { articles } = res;
        handleSearch(articles, searchQuery);
      })
      .catch((err) => {
        connectionError(true);
        console.log(err);
      })
      .finally(() => {
        setIsSearching(false);
        setSearchQuery('');
        setPlaceholder('Enter topic');
        setInputClassName('search-form__input');
      });
  };
  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        onChange={handleInput}
        value={searchQuery || ''}
        name='search'
        className={inputClassName}
        type={'search'}
        placeholder={placeholder}
      ></input>
      <button className='search-form__submit' type={'submit'}>
        {buttonText}
      </button>
    </form>
  );
};

export default SearchForm;
