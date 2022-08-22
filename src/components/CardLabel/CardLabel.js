import React, { useState } from 'react';
import './CardLabel.css';
import bookmarkGrey from '../../images/icons/bookmark-icon.svg';
import bookmarkBlack from '../../images/icons/bookmark-hover-icon.svg';
import bookmarkBlue from '../../images/icons/bookmark-marked-icon.svg';
import trashButton from '../../images/icons/trash-icon.svg';
import trashButtonActive from '../../images/icons/trash-active-icon.svg';

import { useInfo } from '../../context/UserContext';
import { useLocation } from 'react-router';

function CardLable(props) {
  const { text = 'Placeholder', isSaved } = props;

  const savedNews = useLocation().pathname === '/saved-articles';

  const [trashIcon, setTrashIcon] = useState(trashButton);
  const [bookmarkIcon, setBookmarkIcon] = useState(bookmarkGrey);
  const { currentUser } = useInfo();

  const handleBookmarkCick = () => {
    if (currentUser.isLoggedIn && !isSaved) setBookmarkIcon(bookmarkBlue);
    else setBookmarkIcon(bookmarkGrey);
  };

  return (
    <>
      {!savedNews && (
        <div className='label__container label__container_right'>
          <div className='label__container_popup'>
            <span className='label__popup label__text'>{text}</span>
          </div>
          <button
            className='label__button'
            onClick={handleBookmarkCick}
            onMouseEnter={() => !isSaved && setBookmarkIcon(bookmarkBlack)}
            onMouseLeave={() => !isSaved && setBookmarkIcon(bookmarkGrey)}
            type='button'
          >
            <img className='label__icon' src={bookmarkIcon} alt='bookmark' />
          </button>
        </div>
      )}
      {savedNews && (
        <div className='label__container label__container_right'>
          <div className='label__container_popup'>
            <span className='label__popup label__text'>Remove from saved</span>
          </div>
          <button
            className='label__button'
            onMouseEnter={() => setTrashIcon(trashButtonActive)}
            onMouseLeave={() => setTrashIcon(trashButton)}
            type='button'
          >
            <img className='label__icon' src={trashIcon} alt='trash' />
          </button>
        </div>
      )}
      {savedNews && (
        <div className='label__container label__container_left'>
          <span className='label__text'>{text}</span>
        </div>
      )}
    </>
  );
}

export default CardLable;
