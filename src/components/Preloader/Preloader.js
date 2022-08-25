import './Preloader.css';
const Preloader = ({text}) => {
  return (
    <section className='preloader'>
      <div className='preloader__circle'></div>
      <span className='preloader__text'>{text}</span>
    </section>
  );
};

export default Preloader;