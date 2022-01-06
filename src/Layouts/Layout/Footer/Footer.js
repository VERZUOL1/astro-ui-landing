import React from 'react';
import { ReactSVG } from 'react-svg';
import star from '../../../assets/images/footer/footer-star.svg';
import FooterSocialList from './FooterSocialList';
import footerData from './footerData';

const Footer = () => {
  const { logo, icons } = footerData;
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <ReactSVG className="footer__star-icon" src={star} />
          <p className="footer__title">
            Need a NEAR account? Create one&nbsp;
            <a className="footer__title-link" href="//wallet.near.org">
              here
            </a>
            .
          </p>
        </div>

        <div className="footer__center">
          <FooterSocialList icons={icons} />
          <div className="footer__logo-wrapper">
            <p className="footer__powered-by">powered by</p>
            <ReactSVG src={logo} />
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__privacy-wrapper">
            <p className="footer__privacy">Privacy policy</p>
            <p className="footer__terms">Terms of use</p>
          </div>
          <p className="footer__text">
            SputnikDAO 2021. The software is an open source and provided
            “as&nbsp;is”, without warranty of any kind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
