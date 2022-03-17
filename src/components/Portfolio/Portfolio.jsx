import React from 'react';
import './Portfolio.css'
import fashionStore from '../../image/fashionStore.jpg'
import reebokStore from '../../image/ReebokStore.png'
import braunStore from '../../image/BraunStore.png'
import PortfolioSample from '../PortfolioSample/PortfolioSample';

const Portfolio = ({lang}) => {
  let portfolioSamples = [
    {portSampImg: fashionStore, portSampImgAlt:'fashionStore', portSampDisc: 'Online fashion store - Homepage'},
    {portSampImg: reebokStore, portSampImgAlt:'reebokStore', portSampDisc: 'Reebok Store - Concept'},
    {portSampImg: braunStore, portSampImgAlt:'braunStore', portSampDisc: 'Braun Landing Page - Concept'}
  ]
  let langSwitch = (lang) => {switch(lang) {
    case 'eng': return <h2 className='portfolio__title'>Portfolio</h2>;
    case 'ru': return <h2 className='portfolio__title'>Портфолио</h2>;
  }}
  return (
    <div className='portfolio'>
    <a className='portfolioAnchor' name='portfolio'></a>
      <div className='portfolio__content _container'>
        {langSwitch(lang)}
        {portfolioSamples.map((item, index) => <PortfolioSample portfolioSamp={item} key={index}/>)}
      </div>
    </div>
  );
};

export default Portfolio;