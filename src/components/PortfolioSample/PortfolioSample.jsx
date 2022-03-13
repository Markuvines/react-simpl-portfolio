import React from 'react';
import './PortfolioSample.css'

const PortfolioSample = ({portfolioSamp}) => {
  return (
    <div className='portfolio__sample'>
      <img className='portfolio__samleImg' src={portfolioSamp.portSampImg} alt={portfolioSamp.portSampImgAlt}/>
      <span className='portfolio__samleDiscr'>{portfolioSamp.portSampDisc}</span>
    </div>
  );
};

export default PortfolioSample;