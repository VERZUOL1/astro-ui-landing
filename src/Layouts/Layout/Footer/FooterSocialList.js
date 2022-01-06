import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const FooterSocialList = ({ icons }) => (
  <ul className="footer__social-list">
    {icons?.length &&
      icons.map(({ id, svgIcon, link }) => (
        <li className="footer__social-item" key={id}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ReactSVG src={svgIcon} />
          </a>
        </li>
      ))}
  </ul>
);

FooterSocialList.propTypes = {
  icons: PropTypes.array,
};

export default FooterSocialList;
