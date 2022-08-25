import './SearchForm.css';
import { cards } from '../../utils/tempCardsData';

const SearchForm = (handleSearch) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(cards);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Enter toppic'
        className='search-form__input'
      />
      <button className='search-form__submit' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
