import './Preloader.css';
const Preloader = ({ text }) => {
  return (
    <section className='preloader'>
      <div className='preloader__circle'></div>
      <p className='preloader__text'>{text}</p>
    </section>
  );
};

export default Preloader;
