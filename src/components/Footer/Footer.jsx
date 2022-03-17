import React from 'react';
import './Footer.css'
import IN from '../../image/social/IN.svg'
import INST from '../../image/social/INST.svg'
import BEH from '../../image/social/BEH.svg'
import DRI from '../../image/social/DRI.svg'
import SocialItem from '../SocialItem/SocialItem';

const Footer = ({lang}) => {
  const socialItems = [
    {link: 'https://www.google.com', image: IN, imgAlt: 'LinkedIn'},
    {link: 'https://www.google.com', image: INST, imgAlt: 'Instagram'},
    {link: 'https://www.google.com', image: BEH, imgAlt: 'Behance'},
    {link: 'https://www.google.com', image: DRI, imgAlt: 'Dribble'}
  ]
  const langSwitch = () => {switch(lang) {
    case 'ru': return(
      <div className='footer__content _container'>
        <h2 className='footer__title'>Контакты</h2>
        <p className='footer__discription'>Хотите узнать больше или просто початиться?<br/> Добро пожаловать!</p>
        <div className='footer__button'>Отправить сообщение</div>
        <div className='footer__social'>
          {socialItems.map((item) => <SocialItem socialItem={item}/>)}
        </div>
        <div className='footer__message'>Лайкните меня на<br/> LinkedIn, Instagram, Behance, Dribble</div>
      </div>
    )
    
    case 'eng':
      return(
        <div className='footer__content _container'>
          <h2 className='footer__title'>Contacts</h2>
          <p className='footer__discription'>Want to know more or just chat?<br/> You are welcome!</p>
          <div className='footer__button'>Send message</div>
          <div className='footer__social'>
            {socialItems.map((item) => <SocialItem socialItem={item}/>)}
          </div>
          <div className='footer__message'>Like me on<br/> LinkedIn, Instagram, Behance, Dribble</div>
        </div>
      )
  }
}
  return (
    <div className='footer'>
    <a name='contacts'></a>
      {langSwitch()}
    </div>
  );
};

export default Footer;