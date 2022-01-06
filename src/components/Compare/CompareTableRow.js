import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const CompareTableRow = ({ row }) => (
  <li className="compare-table__row">
    {row.data.map((item) => (
      <div key={item.id} className="compare-table__item">
        <ReactSVG src={item.src} />
        {item.text}
      </div>
    ))}
  </li>
);

CompareTableRow.propTypes = {
  row: PropTypes.object,
};

export default CompareTableRow;
