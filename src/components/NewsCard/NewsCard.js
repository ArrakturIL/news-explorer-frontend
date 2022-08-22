import React from 'react';
import './NewsCard.css';
import CardLabel from '../CardLabel/CardLabel';

function NewsCard(props) {
  const { card } = props;

  return (
    <li>
      <article className='card__container' key={card._id}>
        <div className='card__image-container'>
          <CardLabel />
          <img className='card__image' src={card.img} alt={card.title} />
        </div>
        <div className='card__content'>
          <span className='card__date'>{card.date}</span>
          <h3 className='card__title'>{card.title}</h3>
          <blockquote className='card__text' cite={card.source}>
            {card.text}
          </blockquote>
        </div>
        <a className='card__source hover-fade' href={card.link}>
          {card.source}
        </a>
      </article>
    </li>
  );
}

export default NewsCard;
