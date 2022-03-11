import Header from './components/Header/Header';
import './reset.css'
import './style.css'
import mySelf from './image/self.jpg'
import menu from './image/menu.svg'

import { useState } from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  const [lang, setLang] = useState('eng')
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className='wrapper'>
        <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} lang={lang} setLang={setLang}/>
        <Header lang ={lang}/>
        <main>
          <div className='home'>
            <div className='home__content _container'>
              <div className='home__title'>
                <span className='home__name'>Denis Novik</span>
                <span className='home__prof'>UX | UI designer 24 years old, Minsk</span>
                <span className='home__langToggle'> 
                  <span className={`home__lang ${lang==='ru' && 'home__lang_active'}`} onClick={() => setLang('ru')}>RU</span> | <span className={`home__lang ${lang==='eng' && 'home__lang_active'}`} onClick={() => setLang('eng')}>ENG</span>
                </span>
              </div>
              <img className='home__menu' src={menu} alt="menu" onClick={() => {setMobileMenu(!mobileMenu)}}/>
              <img className='home__image' src={mySelf} alt="mySelf"/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
