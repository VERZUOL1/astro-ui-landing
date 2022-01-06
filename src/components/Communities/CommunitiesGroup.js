import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../hooks/useWindowSize';
import CommunitiesCard from './CommunitiesCard';

// Import Swiper styles
import 'swiper/swiper.scss';

const CommunitiesGroup = ({ title, text, cards }) => {
  const { windowSize } = useWindowSize();
  const isCenter = true;

  return (
    <div className="communities-group">
      <div className="communities-group__title-wrapper">
        <h3 className="communities-group__title">{title}</h3>
        <p className="communities-group__text">{text}</p>
      </div>
      {windowSize.width > 768 ? (
        <ul className="communities-group__list">
          {cards?.length &&
            cards.map((card) => <CommunitiesCard key={card.id} card={card} />)}
        </ul>
      ) : (
        <div className="communities-group__list">
          <Swiper slidesPerView={1} centeredSlides={isCenter}>
            {cards?.length &&
              cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <CommunitiesCard card={card} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

CommunitiesGroup.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  cards: PropTypes.array,
};

export default CommunitiesGroup;
