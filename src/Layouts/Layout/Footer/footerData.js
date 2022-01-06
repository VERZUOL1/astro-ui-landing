import shortid from 'shortid';
import logo from '../../../assets/images/footer/near-logo.svg';
import face from '../../../assets/images/footer/face.svg';
import twitter from '../../../assets/images/footer/twitter.svg';
import github from '../../../assets/images/footer/github.svg';
import telegram from '../../../assets/images/footer/telegram.svg';

const footerData = {
  logo,
  icons: [
    {
      id: shortid.generate(),
      svgIcon: face,
      link: 'https://discord.com/invite/UY9Xf2k',
    },
    {
      id: shortid.generate(),
      svgIcon: twitter,
      link: 'https://twitter.com/NEARProtocol',
    },
    {
      id: shortid.generate(),
      svgIcon: github,
      link: 'https://github.com/near',
    },
    {
      id: shortid.generate(),
      svgIcon: telegram,
      link: 'https://t.me/cryptonear',
    },
  ],
};

export default footerData;
