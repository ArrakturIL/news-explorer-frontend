import './NewsCard.css';
import CardLabel from '../CardLabel/CardLabel';
import { mainApi } from '../../utils/MainApi';
import { useState } from 'react';
import { useInfo } from '../../contexts/UserContext';
import { popupActions, usePopups } from '../../contexts/PopupContext';

const NewsCard = ({ removeBooknark, ...card }) => {
  const { keyword, isSaved, title } = card;

  const name = card?.sourse?.name;
  const searchId = card?.id;
  const urlToImage = card?.urlToImage;
  const description = card?.description;
  const publishedAt = card.publishedAt;
  const url = card.url;

  const { currentUser, setSavedCardsState, savedCards } = useInfo();
  const [, popupDispatch] = usePopups();
  const [saveId, setSaveId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleBookmarkClick = () => {
    if (!currentUser.isLoggedIn) {
      popupDispatch(popupActions.openSignInPopup);
    } else if (isSaved || saveId) {
      mainApi
        .deleteArticle(saveId || searchId)
        .then((cards) => {
          setSavedCardsState(cards);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setSavedCardsState(savedCards.filter((xCard) => xCard.url !== url));
          setIsDeleted(true);
          setSaveId(null);
        });
    } else {
      mainApi
        .saveArticle({
          date: publishedAt,
          image: urlToImage,
          keyword,
          link: url,
          source: name,
          text: description,
          title,
        })
        .then((card) => {
          setSaveId(card.id);
          setIsDeleted(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleTrashClick = () => {
    mainApi
      .deleteArticle(searchId || saveId)
      .then(() => {
        setSavedCardsState(
          savedCards.filter((card) => card.id !== searchId || saveId)
        );
      })
      .catch((err) => console.log(err));
  };

  const date = new Date(publishedAt);
  const formateDate = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <li>
      <article className='news-card'>
        <div className='news-card__image-container'>
          <CardLabel
            onTrashClick={handleTrashClick}
            onBookmarkClick={handleBookmarkClick}
            text={keyword}
            isSaved={isSaved}
            isDeleted={isDeleted}
            saveId={saveId}
          />
          <a href={url} target='_blank' rel='noreferrer'>
            <img
              className='news-card__image'
              src={urlToImage}
              alt={title}
            ></img>
          </a>
        </div>
        <div className='news-card__info'>
          <span className='news-card__date'>{formateDate}</span>
          <h3 className='news-card__header'>{title}</h3>
          <blockquote className='news-card__text' cite={name}>
            {description}
          </blockquote>
        </div>
        <a
          className='news-card__ref hover-fade'
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
      </article>
    </li>
  );
};

export default NewsCard;
