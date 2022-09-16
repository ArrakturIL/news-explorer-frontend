import './CardLabel.css';

import { useLocation } from 'react-router';
import React, { useState } from 'react';

import bookmarkGrey from '../../images/icons/bookmarkGrey.svg';
import bookmarkBlack from '../../images/icons/bookmarkBlack.svg';
import bookmarkBlue from '../../images/icons/bookmarkBlue.svg';
import trashButton from '../../images/icons/trash-icon.svg';
import trashButtonActive from '../../images/icons/trash-active-icon.svg';

import { useInfo } from '../../contexts/UserContext';

function CardLable(props) {
  const { isDeleted, text, isSaved, saveId, onBookmark, onTrashClick } = props;

  const savedNews = useLocation().pathname === '/saved-articles';

  const [trashIcon, setTrashIcon] = useState(trashButton);
  const [bookmarkIcon, setBookmarkIcon] = useState(bookmarkGrey);
  const { currentUser } = useInfo();

  return (
    <>
      {!savedNews && (
        <div className='label__container label__container-right'>
          {!currentUser.isLoggedIn && (
            <div className='label__container-popup'>
              <p className='label__popup label__text'>Sign in to save</p>
            </div>
          )}
          <button
            className='label__button'
            onClick={onBookmark}
            onMouseEnter={() => !isSaved && setBookmarkIcon(bookmarkBlack)}
            onMouseLeave={() => !isSaved && setBookmarkIcon(bookmarkGrey)}
            type='button'
          >
            <img
              className='label__icon'
              src={
                !isDeleted && (saveId || isSaved) ? bookmarkBlue : bookmarkIcon
              }
              alt={'Bookmark icon'}
            />
          </button>
        </div>
      )}
      {savedNews && (
        <div className='label__container label__container-right'>
          <div className='label__container-popup'>
            <p className='label__popup label__text'>Remove from saved</p>
          </div>
          <button
            className='label__button'
            onClick={onTrashClick}
            onMouseEnter={() => setTrashIcon(trashButtonActive)}
            onMouseLeave={() => setTrashIcon(trashButton)}
            type='button'
          >
            <img className='label__icon' src={trashIcon} alt={'Trash icon'} />
          </button>
        </div>
      )}
      {savedNews && (
        <div className='label__container label__container-left'>
          <p className='label__text'>{text}</p>
        </div>
      )}
    </>
  );
}

export default CardLable;
