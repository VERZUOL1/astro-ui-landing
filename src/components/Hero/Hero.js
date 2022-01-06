import React from 'react';
import { ReactSVG } from 'react-svg';
import Header from '../../Layouts/Layout/Header';
import Possibilities from '../Possibilities/Possibilities';
import stars from '../../assets/images/hero-background-stars.svg';
import JoinBtn from '../JoinBtn';

const Hero = () => (
  <section className="hero">
    <ReactSVG className="hero__background" src={stars} />
    <Header />
    <div className="hero__container">
      <h1 className="hero__title">Meet. Vote. Fund.</h1>
      <p className="hero__text">
        Supercharge your community using <strong>Astro.</strong>
        <br />
        We empower groups anywhere in the world to make decisions together,
        collectively.
      </p>
      <JoinBtn text="launch app" className="hero__join-btn" />
    </div>
    <Possibilities />
  </section>
);

export default Hero;
