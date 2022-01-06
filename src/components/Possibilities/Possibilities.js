import React from 'react';
import { ReactSVG } from 'react-svg';
import community from '../../assets/images/possibilities-community.svg';
import funds from '../../assets/images/possibilities-funds.svg';
import vote from '../../assets/images/possibilities-vote.svg';

const Possibilities = () => (
  <div className="possibilities">
    <p className="possibilities__title">on astro, you can</p>
    <ul className="possibilities__list">
      <li className="possibilities__list-item">
        <p className="possibilities__item-header">
          Meet people <br /> that share your values.
        </p>
        <ReactSVG src={community} />
      </li>
      <li className="possibilities__list-item">
        <p className="possibilities__item-header">
          Vote to take <br /> collaborative action.
        </p>
        <ReactSVG src={vote} />
      </li>
      <li className="possibilities__list-item">
        <p className="possibilities__item-header">
          Fund your <br />
          collective goals.
        </p>
        <ReactSVG src={funds} />
      </li>
    </ul>
  </div>
);

export default Possibilities;
