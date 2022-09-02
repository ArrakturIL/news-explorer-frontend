import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import './AuthForm.css';

const AuthForm = ({
  formName,
  onSubmit,
  buttonText,
  withNameField,
  responseError,
}) => {
  const { inputs, errors, isValid, handleInputChange } =
    useInputsAndValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className='form' name={formName} onSubmit={handleSubmit}>
      <div className='form__inputs-wrapper'>
        <label className='form__label'>
          Email
          <input
            className='form__input'
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleInputChange}
            value={inputs.email || ''}
            required
          />
        </label>
        <span className='form__input-error'>{errors.email}</span>
        <label className='form__label'>
          Password
          <input
            className='form__input'
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handleInputChange}
            value={inputs.password || ''}
            minLength='6'
            required
          />
        </label>
        <span className='form__input-error'>{errors.password}</span>
        {withNameField && (
          <>
            <label className='form__label'>
              Username
              <input
                className='form__input'
                type='string'
                name='username'
                placeholder='Enter username'
                onChange={handleInputChange}
                value={inputs.username || ''}
                minLength='2'
                required
              />
            </label>
            <span className='form__input-error'>{errors.username}</span>
          </>
        )}
      </div>
      {responseError && (
        <span className='form__response-error'>{responseError}</span>
      )}
      <button className='form__submit-button' type='submit' disabled={!isValid}>
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;