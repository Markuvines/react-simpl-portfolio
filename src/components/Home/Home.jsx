import React from 'react';
import mySelf from '../../image/self.jpg'
import menu from '../../image/menu.svg'
import './Home.css'

const Home = ({mobileMenu, setMobileMenu, lang, setLang}) => {
  return (
    <div className='home'>
      <div className='home__content _container'>
        {(() => {
        switch (lang) {
          case 'ru': 
            return(
              <div className='home__title'>
                <span className='home__name'>Денис Новик</span>
                <span className='home__prof'>UX | UI дезайнер 24 года, Минск</span>
                <span className='home__langToggle'> 
                  <span className={`home__lang ${lang==='ru' && 'home__lang_active'}`} onClick={() => setLang('ru')}>РУС</span> | <span className={`home__lang ${lang==='eng' && 'home__lang_active'}`} onClick={() => setLang('eng')}>АНГЛ</span>
                </span>
              </div>
            )
          case 'eng':
            return(
              <div className='home__title'>
          <span className='home__name'>Denis Novik</span>
          <span className='home__prof'>UX | UI designer 24 years old, Minsk</span>
          <span className='home__langToggle'> 
            <span className={`home__lang ${lang==='ru' && 'home__lang_active'}`} onClick={() => setLang('ru')}>RU</span> | <span className={`home__lang ${lang==='eng' && 'home__lang_active'}`} onClick={() => setLang('eng')}>ENG</span>
          </span>
        </div>
            )
        }
        })()}
        <img className='home__menu' src={menu} alt="menu" onClick={() => {setMobileMenu(!mobileMenu)}}/>
        <img className='home__image' src={mySelf} alt="mySelf"/>
      </div>
    </div>
  );
};

export default Home;