import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AuthForm from '../AuthForm/AuthForm';
import { usePopups } from '../../contexts/PopupContext';

const Register = ({ handleSignUp, showSignIn, responseError }) => {
  const [popupState] = usePopups();

  return (
    <PopupWithForm
      withNameField
      isOpen={popupState.isSignupPopupOpen}
      onSubmit={handleSignUp}
      isValid={true}
      formName='signup'
      title='Sign up'
      buttonText='Sign up'
      redirectText='Sign In'
      handleRedirect={showSignIn}
      responseError={responseError}
    >
      <AuthForm />
    </PopupWithForm>
  );
};

export default Register;
