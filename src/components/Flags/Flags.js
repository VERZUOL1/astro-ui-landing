import React from 'react';
import { ReactSVG } from 'react-svg';
import JoinBtn from '../JoinBtn';
import blackFlag from '../../assets/images/black-flag.svg';
import flagsData from './flagsData';
import FlagsList from './FlagsList';

const Flags = () => (
  <div className="flags">
    <ReactSVG className="flags__icon" src={blackFlag} />
    <div className="flags__title">
      Stake your flag in an internet&#8209;powered democracy
    </div>
    <JoinBtn text="LAUNCH APP" className="flags__join-btn" />
    <FlagsList flags={flagsData} />
  </div>
);

export default Flags;
