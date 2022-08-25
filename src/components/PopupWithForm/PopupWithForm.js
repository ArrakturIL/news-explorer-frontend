import './PopupWithForm.css';
import { cloneElement } from 'react';
import { usePopups, popupActions } from '../../contexts/PopupContext';

const PopupWithForm = (props) => {
  const {
    hideForm,
    name,
    title,
    children,
    isOpen,
    redirectText,
    handleRedirect,
  } = props;

  const [, popupDispatch] = usePopups();

  const handleClick = (e) => {
    const classList = e.target.classList;
    const isCloseEvent =
      classList.contains(`popup_type_${name}`) ||
      classList.contains('popup__close-button');
    if (isCloseEvent) {
      popupDispatch(popupActions.closeAll);
    }
  };

  return (
    <div
      onMouseDown={handleClick}
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container'>
        <button className='popup__close-button' onClick={onClose}></button>
        <h3 className='popup__title'>{title}</h3>
        {!hideForm && cloneElement(children, props)}
        <div
          className='form__redirect-wrapper'
          style={{ display: hideForm ? 'block' : 'flex' }}
        >
          {!hideForm && <span>or</span>}
          <nav>
            <button
              className='form__redirect-button hover-fade'
              onClick={handleRedirect}
            >
              {redirectText}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PopupWithForm;
