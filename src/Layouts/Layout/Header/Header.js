import React from 'react';
import { ReactSVG } from 'react-svg';
import nearLogo from '../../../assets/images/hero-near-logo.svg';
import astroLogo from '../../../assets/images/hero-astro-logo.svg';
import JoinBtn from '../../../components/JoinBtn';

const Header = () => (
  <div className="header">
    <ReactSVG className="header__logo-astro" src={astroLogo} />
    <p className="header__text">Powered by</p>
    <ReactSVG className="header__logo-near" src={nearLogo} />

    <div className="header__join">
      <JoinBtn text="launch app" />
    </div>
  </div>
);

export default Header;
