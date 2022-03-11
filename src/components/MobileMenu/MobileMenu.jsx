import React from 'react';
import close from '../../image/close.svg'
import './MobileMenu.css'

const MobileMenu = ({mobileMenu, setMobileMenu, lang, setLang}) => {
  return (
    <nav className={mobileMenu ? 'mobileMenu mobileMenu_active' : 'mobileMenu'}>
      <ul className='mobileMenuList'>
      {(() => {switch (lang) {
        case 'eng': return (
          <>
            <li className='mobileMenu__item'>Home</li>
            <li className='mobileMenu__item'>Skills</li>
            <li className='mobileMenu__item'>About me</li>
            <li className='mobileMenu__item'>Portfolio</li>
            <li className='mobileMenu__item'>Contacts</li>
          </>
        );
        case 'ru': return(
          <>
            <li className='mobileMenu__item'>Главная</li>
            <li className='mobileMenu__item'>Навыки</li>
            <li className='mobileMenu__item'>Обо мне</li>
            <li className='mobileMenu__item'>Портфолио</li>
            <li className='mobileMenu__item'>Контакты</li>
          </>
        )
         
      }}) ()}
      </ul>
      <div className='mobileMenuSide'>
        <img className='mobileMenu__close' src={close} alt="close" onClick={() => {setMobileMenu(!mobileMenu)}} />
          {(() => {switch (lang) {
          case 'eng': return (
            <span className='mobileMenu__langToggle'> 
              <span className={lang==='eng' && 'home__lang home__lang_active'} onClick={() => setLang('ru')}>RU</span> | <span className='mobileMenu__lang mobileMenu__lang_active' onClick={() => setLang('eng')}>ENG</span>
            </span>
          );
          case 'ru': return(
            <span className='mobileMenu__langToggle'> 
              <span className={lang==='ru' && 'home__lang home__lang_active'} onClick={() => setLang('ru')}>РУС</span> | <span className='mobileMenu__lang mobileMenu__lang_active' onClick={() => setLang('eng')}>АНГЛ</span>
            </span>
          )
        }}) ()}
      </div>
    </nav>
  );
};

export default MobileMenu;