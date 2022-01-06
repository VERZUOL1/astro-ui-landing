import React from 'react';
import { compareData } from './compareData';
import CompareTableRow from './CompareTableRow';

const CompareTable = () => (
  <ul className="compare-table">
    <li className="compare-table__row">
      <p className="compare-table__head compare-table__head-vs">DAO</p>
      <p className="compare-table__head">Company</p>
    </li>

    {compareData.length &&
      compareData.map((row) => <CompareTableRow key={row.id} row={row} />)}
  </ul>
);

export default CompareTable;
