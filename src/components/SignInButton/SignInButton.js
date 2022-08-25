import './SignInButton.css';
import {usePopups, popupActions} from '../../contexts/PopupsContext';

const SignInButton = ({inUserMenu}) => {
    const [, popupDispatch] = usePopups();
    const wrapperClassName = `navbar__sign-in-wrapper${inUserMenu ? ' navbar__sign-in-wrapper_in_type_menu' : ''}`;

    const handleClick = () => {
        popupDispatch(popupActions.openSigninPopup);
        popupDispatch(popupActions.closeUserMenu);
    }

    return (
        <li className={wrapperClassName} onClick={handleClick}>
            <button className="navbar__sign-in-button">Sign in</button>
        </li>
    );
}

export default SignInButton;