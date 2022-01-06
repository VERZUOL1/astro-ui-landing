import shortid from 'shortid';
import grant from '../../assets/images/purpose-grant.svg';
import business from '../../assets/images/purpose-businesses.svg';
import investing from '../../assets/images/purpose-investing.svg';
import clubs from '../../assets/images/purpose-clubs.svg';

export const purposeData = [
  {
    id: shortid.generate(),
    svgIcon: grant,
    title: 'For grant giving',
    text: 'Vote and collectively decide what people and projects to fund.',
  },
  {
    id: shortid.generate(),
    svgIcon: business,
    title: 'for businesses',
    text: 'Keep track of owners’ equity and elect managers to make day-to-day decisions. ',
  },
  {
    id: shortid.generate(),
    svgIcon: investing,
    title: 'for investing',
    text: 'Pool funds and vote on strategy and transactions.',
  },
  {
    id: shortid.generate(),
    svgIcon: clubs,
    title: 'For clubs',
    text: 'Elect leaders and decide where to spend group funds.',
  },
];
