import './NotFound.css';
import notFound from '../../images/icons/not-found-icon.svg';

function NotFound() {
  return (
    <section className='not-found__container'>
      <img src={notFound} alt='not found' className='not-found__icon' />
      <p className='not-found__title'>Nothing found</p>
      <p className='not-found__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFound;
