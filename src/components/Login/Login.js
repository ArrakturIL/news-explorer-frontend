import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AuthForm from '../AuthForm/AuthForm';
import { usePopups } from '../../contexts/PopupContext';

const Login = ({ handleSignIn, showSignUp, responseError }) => {
  const [popupState] = usePopups();

  return (
    <PopupWithForm
      isOpen={popupState.isSigninPopupOpen}
      onSubmit={handleSignIn}
      isValid={true}
      formName='signin'
      title='Sign in'
      buttonText='Sign in'
      redirectText='Sign up'
      handleRedirect={showSignUp}
      responseError={responseError}
    >
      <AuthForm />
    </PopupWithForm>
  );
};

export default Login;
