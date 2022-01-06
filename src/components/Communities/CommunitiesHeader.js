import React from 'react';

const CommunitiesHeader = () => (
  <>
    <h2 className="communities__title">Get inspired by thriving communities</h2>
    <div className="communities__statistic-wrapper">
      <div className="communities__statistic">
        <p className="communities__count">110</p>
        <p className="communities__count-explanation">daos created</p>
      </div>
      <div className="communities__statistic">
        <p className="communities__count">86,250 Ⓝ </p>
        <p className="communities__count-explanation">total locked value</p>
      </div>
    </div>
  </>
);

export default CommunitiesHeader;
