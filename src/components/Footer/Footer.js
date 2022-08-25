import React from 'react';
// import Navigation from '../Navigation/Navigation';
import './Footer.css';
import githubLogo from '../../images/icons/github.svg';
import inLogo from '../../images/icons/linkedIn.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; {new Date().getFullYear()}Supersite, Powered by News API
      </p>
      <nav className='footer__nav'>
        <ul className='footer__links-text'>
          <li className='footer__link-text hover-fade'>
            <a href='/'>Home</a>
          </li>
          <li className='footer__link-text hover-fade'>
            <a href='https://www.practicum100.org/'>Practicum by Yandex</a>
          </li>
        </ul>
        <ul className='footer__links-social'>
          <li className='footer__link-social hover-fade'>
            <a href='https://github.com/ArrakturIL'>
              <img src={githubLogo} alt='Github' />
            </a>
          </li>
          <li className='footer__link-social hover-fade'>
            <a href='www.linkedin.com/in/sergey-gushchin-2bb25a21a'>
              <img src={inLogo} alt='LinkedIn' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
