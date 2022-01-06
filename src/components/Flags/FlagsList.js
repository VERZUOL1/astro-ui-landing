import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const FlagsList = ({ flags }) => (
  <div className="flags-list">
    <div className="flags-list__row">
      {flags?.length &&
        flags.map(({ id, svgIcon }, index) =>
          index < 5 ? (
            <div key={id} className="flags-list__item">
              <ReactSVG src={svgIcon} />
            </div>
          ) : null,
        )}
    </div>
    <div className="flags-list__row">
      {flags?.length &&
        flags.map(({ id, svgIcon }, index) =>
          index >= 5 ? (
            <div key={id} className="flags-list__item">
              <ReactSVG src={svgIcon} />
            </div>
          ) : null,
        )}
    </div>
  </div>
);

FlagsList.propTypes = {
  flags: PropTypes.array,
};

export default FlagsList;
