import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubLogo from '../../images/icons/github.svg';
import inLogo from '../../images/icons/linkedIn.svg';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer__nav-wrapper'>
        <ul className='footer__page-links'>
          <li className='footer__page-link hover-fade'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='footer__page-link hover-fade'>
            <Link to={'http://practicum.com'}> Practicum by Yandex </Link>
          </li>
        </ul>
        <ul className='footer__social-links'>
          <li>
            <a
              className='footer__social-link hover-fade'
              href='https://github.com/ArrakturIL'
              target={'_blank'}
              rel='noreferrer'
            >
              <img
                className='footer__social-link-image'
                src={githubLogo}
                alt='Github icon'
              ></img>
            </a>
          </li>
          <li>
            <a
              className='footer__social-link hover-fade'
              href='http://linkedin.com/in/arrakturil'
              target={'_blank'}
              rel='noreferrer'
            >
              <img
                className='footer__social-link-image'
                src={inLogo}
                alt='LinkedIn icon'
              ></img>
            </a>
          </li>
        </ul>
      </nav>
      <span className='footer__copyright'>
        &copy; {new Date().getFullYear()} News Explorer, Powered by News API
      </span>
    </footer>
  );
}
export default Footer;
