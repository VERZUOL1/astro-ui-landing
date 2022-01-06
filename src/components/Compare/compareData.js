import shortid from 'shortid';
import clock from '../../assets/images/dao-clock.svg';
import earth from '../../assets/images/dao-earth.svg';
import open from '../../assets/images/dao-open.svg';
import structure from '../../assets/images/dao-structure.svg';
import coast from '../../assets/images/company-coast.svg';
import jurisdiction from '../../assets/images/company-jurisdictions.svg';
import organisation from '../../assets/images/company-organisations.svg';
import privateIcon from '../../assets/images/company-private.svg';

export const compareData = [
  {
    id: shortid.generate(),
    data: [
      { id: shortid.generate(), src: clock, text: 'Quick to set up' },
      { id: shortid.generate(), src: coast, text: 'Costly to start' },
    ],
  },
  {
    id: shortid.generate(),
    data: [
      { id: shortid.generate(), src: earth, text: 'Global and borderless' },
      {
        id: shortid.generate(),
        src: jurisdiction,
        text: 'Tied to local jurisdictions',
      },
    ],
  },
  {
    id: shortid.generate(),
    data: [
      { id: shortid.generate(), src: open, text: 'Build-your-own structure' },
      {
        id: shortid.generate(),
        src: organisation,
        text: 'Hierarchical organizations',
      },
    ],
  },

  {
    id: shortid.generate(),
    data: [
      { id: shortid.generate(), src: structure, text: 'Open and transparent ' },
      { id: shortid.generate(), src: privateIcon, text: 'Private and opaque' },
    ],
  },
];
