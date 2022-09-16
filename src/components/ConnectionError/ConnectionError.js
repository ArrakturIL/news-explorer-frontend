import './ConnectionError.css';
import notFound from '../../images/icons/not-found-icon.svg';

const ConnectionError = () => {
  return (
    <section className='nothing-found__container'>
      <img
        className='nothing-found__image'
        src={notFound}
        alt='Sad face emoticon'
      ></img>
      <p className='nothing-found__title'>Something went wrong</p>
      <p className='nothing-found__text'>
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </section>
  );
};

export default ConnectionError;
