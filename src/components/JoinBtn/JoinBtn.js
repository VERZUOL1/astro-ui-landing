import React from 'react';
import PropTypes from 'prop-types';

const JoinBtn = ({ text, className }) => (
  <a
    href="https://app.astrodao.com/all/daos"
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
