import './NewsCardSection.css';

const NewsCardSection = ({children}) => {
    return (
        <section className='news-section'>
            {children}
        </section>
    )
}

export default NewsCardSection;