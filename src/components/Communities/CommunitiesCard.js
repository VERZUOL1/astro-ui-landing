import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const CommunitiesCard = ({ card }) => (
  <div className="communities-card">
    <ReactSVG className="communities-card__icon" src={card.svgIcon} />
    <p className="communities-card__title">{card.title}</p>
    <p className="communities-card__subtitle">{card.subtitle}</p>
    <p className="communities-card__text">{card.text}</p>
    <p className="communities-card__proposal">
      {card.proposal} ACTIVE PROPOSAL
    </p>

    <div className="communities-card__statistic-wrapper">
      <div className="communities-card__statistic-member">
        <p className="communities-card__count-explanation">members</p>
        <p className="communities-card__count">{card.members}</p>
      </div>
      <div className="communities-card__statistic-funds">
        <p className="communities-card__count-explanation">Funds</p>
        <p className="communities-card__count">
          <span className="communities-card__count_bold">{card.fund}</span> USD
        </p>
      </div>
    </div>
  </div>
);

CommunitiesCard.propTypes = {
  card: PropTypes.object,
};

export default CommunitiesCard;
