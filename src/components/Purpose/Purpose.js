import React from 'react';
import PurposeList from './PurposeList';
import { purposeData } from './purposeData';

const Purpose = () => (
  <div className="purpose">
    <div className="purpose__container">
      <header className="purpose__header">
        <h3 className="purpose__title">Why start a DAO?</h3>
        <p className="purpose__text">
          DAOs come in all shapes and sizes. From flat to hierarchical, from
          open to anyone to members-only; <b>you</b> get to decide how you want
          to govern your community.
        </p>
      </header>
      <PurposeList purposeData={purposeData} />
    </div>
  </div>
);

export default Purpose;
