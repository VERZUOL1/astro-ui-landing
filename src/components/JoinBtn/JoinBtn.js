import React from 'react';
import PropTypes from 'prop-types';

import getConfig from '../../config';

const { APP_URL } = getConfig();

const JoinBtn = ({ text, className }) => (
  <a
    href={APP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`join-btn  ${className || ''}`}
  >
    {text}
  </a>
);

JoinBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default JoinBtn;
