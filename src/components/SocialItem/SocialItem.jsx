import React from 'react';
import './SocialItem.css'

const SocialItem = ({socialItem}) => {
  return (
    <a className='footer__socialItem' href={socialItem.link}>
      <img className='footer__socialItemImg' src={socialItem.image} alt={socialItem.imgAlt}/>
    </a>
  );
};

export default SocialItem;