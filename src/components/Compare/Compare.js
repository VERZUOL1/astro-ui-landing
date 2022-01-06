import React from 'react';
import CompareTable from './CompareTable';

const Compare = () => (
  <section className="compare">
    <header className="compare__header">
      <h2 className="compare__title">
        Democracy, powered by the&nbsp;Internet.
      </h2>
      <p className="compare__text">
        Astro is a platform for launching{' '}
        <strong>Decentralized Autonomous Organizations.</strong> DAOs are
        self-organized groups that form around common purposes. Membership,
        decision making, and funding are coordinated in public on a
        tamper-proof&nbsp;
        <strong>blockchain.</strong>
      </p>
    </header>
    <CompareTable />
  </section>
);

export default Compare;
