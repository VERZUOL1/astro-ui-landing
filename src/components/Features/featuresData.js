import democratic from '../../assets/images/features-democratic.svg';
import treasury from '../../assets/images/features-treasury.svg';
import flexible from '../../assets/images/features-flexible.svg';
import shortid from 'shortid';

export let featuresData = [
  {
    id: shortid.generate(),
    svgIcon: democratic,
    title: 'Democratic by default',
    text: 'Decisions like distributing funds, and adding members happen through an intuitive and transparent voting process.',
  },
  {
    id: shortid.generate(),
    svgIcon: treasury,
    title: 'Shared treasury',
    text: 'Funds are held in a treasury and are always distributed through a community-defined process.',
  },
  {
    id: shortid.generate(),
    svgIcon: flexible,
    title: 'Flexible governance',
    text: 'Who votes and how it works can be precisely configured to meet a community’s preferred operating style.',
  },
];
