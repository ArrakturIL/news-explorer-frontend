import './CardLabel.css';

import { useLocation } from 'react-router';
import React, { useState } from 'react';

import bookmarkGrey from '../../images/icons/bookmarkGrey.svg';
import bookmarkBlack from '../../images/icons/bookmarkBlack.svg';
import bookmarkBlue from '../../images/icons/bookmarkBlue.svg';
import trashButton from '../../images/icons/trash-icon.svg';
import trashButtonActive from '../../images/icons/trash-active-icon.svg';

import { useInfo } from '../../context/UserContext';
import {usePopups, popupActions} from '../../context/PopupContext';

function CardLable(props) {
  const { text = 'Placeholder', isSaved } = props;

  const savedNews = useLocation().pathname === '/saved-articles';

  const [, popupDispatch] = usePopups();
  const [trashIcon, setTrashIcon] = useState(trashButton);
  const [bookmarkIcon, setBookmarkIcon] = useState(bookmarkGrey);
  const { currentUser } = useInfo();

  const handleBookmarkCick = () => {
    if (!currentUser.isLoggedIn) popupDispatch(popupActions.openSingUpPopup);
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
            <img className='label__icon' src={isSaved ? bookmarkBlue : bookmarkIcon} alt='bookmark' />
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
