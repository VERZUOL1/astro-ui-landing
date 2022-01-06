import React from 'react';
import { ReactSVG } from 'react-svg';
import democratic from '../../assets/images/features-democratic.svg';
import democraticMobile from '../../assets/images/features-democratic-mobile.svg';
import treasury from '../../assets/images/features-treasury.svg';
import flexible from '../../assets/images/features-flexible.svg';
import useWindowSize from '../../hooks/useWindowSize';

const FeaturesList = () => {
  const { windowSize } = useWindowSize();

  return (
    <ul className="features-list">
      <li className="features-list__item">
        <div className="features-list__icon">
          <ReactSVG
            src={windowSize.width > 768 ? democratic : democraticMobile}
          />
        </div>
        <div className="features-list__description">
          <h3 className="features-list__title">Democratic by default</h3>
          <p className="features-list__text">
            Decisions like distributing funds, and adding members happen through
            an intuitive and transparent voting process.
          </p>
        </div>
      </li>
      <li className="features-list__item features-list__item-reverse">
        <ReactSVG src={treasury} className="features-list__icon" />
        <div className="features-list__description">
          <h3 className="features-list__title features-list__margin-top">
            {' '}
            Shared treasury
          </h3>
          <p className="features-list__text">
            Funds are held in a treasury and are always distributed through a{' '}
            <br />
            community-defined process.
          </p>
        </div>
      </li>
      <li className="features-list__item">
        <ReactSVG src={flexible} className="features-list__icon" />
        <div className="features-list__description">
          <h3 className="features-list__title features-list__margin-top">
            {' '}
            Flexible governance
          </h3>
          <p className="features-list__text ">
            Who votes and how it works can be precisely configured to meet a
            community’s preferred operating style.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default FeaturesList;
