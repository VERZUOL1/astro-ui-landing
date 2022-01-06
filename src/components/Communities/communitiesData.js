import shortid from 'shortid';
import flag1 from '../../assets/images/flags/flag1.svg';
import flag2 from '../../assets/images/flags/flag2.svg';
import flag3 from '../../assets/images/flags/flag3.svg';
import flag4 from '../../assets/images/flags/flag4.svg';
import flag5 from '../../assets/images/flags/flag5.svg';
import flag6 from '../../assets/images/flags/flag6.svg';
import flag7 from '../../assets/images/flags/flag7.svg';

const flags = [flag1, flag2, flag3, flag4, flag5, flag6, flag7];

export const communitiesDataDesktop = {
  id: shortid.generate(),
  title: 'community grants',
  text: 'Organizations that fund open source projects, artists, and many more.',
  cards: [
    {
      id: shortid.generate(),
      title: 'Createbase Community',
      subtitle: 'createbase.astrodao.near',
      text: 'Supporting creative projects that are building in the NEAR ecosystem.',
      proposal: 5,
      members: 334,
      fund: '4,000',
      svgIcon: flag1,
    },
    {
      id: shortid.generate(),
      title: 'Human Guild',
      subtitle: 'humanguild.astrodao.near',
      text: 'Helping humans around the world earn cryptocurrencies every day.',
      proposal: 3,
      members: 53,
      fund: '194,263',
      svgIcon: flag2,
    },
    {
      id: shortid.generate(),
      title: 'Community Squad',
      subtitle: 'proart.astrodao.near',
      text: 'Growing a meaningful network of communities by rewarding contributions.',
      proposal: 10,
      members: 41,
      fund: '9,000',
      svgIcon: flag3,
    },
  ],
};

export const communitiesData = [
  {
    id: shortid.generate(),
    title: 'community grants',
    text: 'Organizations that fund open source projects, artists, and many more.',
    cards: [
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'companies',
    text: 'Decentralized governance for startups and cooperatives.',
    cards: [
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'most active daos',
    text: 'Communities buzzing with activity.',
    cards: [
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
      {
        id: shortid.generate(),
        title: 'Createbase Community',
        subtitle: 'proart.astrodao.near',
        text: 'We’re a collective helping digital artists all around  the  world.',
        proposal: random(45),
        members: random(145),
        fund: randomFunds(),
        svgIcon: flags[random(6)],
      },
    ],
  },
];

function random(count) {
  return Math.round(Math.random() * count);
}

function randomFunds() {
  return 10000 + Math.floor(Math.random() * 30000);
}
