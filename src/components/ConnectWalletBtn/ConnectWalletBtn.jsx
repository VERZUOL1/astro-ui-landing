import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import near from '../../assets/images/near.svg';

const ConnectWalletBtn = ({ className, handleClick, text }) => (
  <button
    className={`connect-wallet ${className || ''}`}
    type="button"
    onClick={handleClick}
  >
    {text ? (
      <div className="connect-wallet__text-wrapper">
        <p className="connect-wallet__text">{text}</p>
        <span className="connect-wallet__log-out">Log Out</span>
      </div>
    ) : (
      <>
        <p className="connect-wallet__text">Sign in with</p>
        <ReactSVG className="connect-wallet__icon" src={near} />
      </>
    )}
  </button>
);

ConnectWalletBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ConnectWalletBtn;
