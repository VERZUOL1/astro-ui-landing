import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const PurposeList = ({ purposeData }) => (
  <ul className="purpose-list">
    {purposeData.length &&
      purposeData.map(({ id, text, title, svgIcon }) => (
        <li key={id} className="purpose-list__item">
          <ReactSVG src={svgIcon} className="purpose-list__icon" />
          <div className="purpose-list__description">
            <p className="purpose-list__title">{title}</p>
            <p className="purpose-list__text">{text}</p>
          </div>
        </li>
      ))}
  </ul>
);

PurposeList.propTypes = {
  purposeData: PropTypes.array,
};

export default PurposeList;
