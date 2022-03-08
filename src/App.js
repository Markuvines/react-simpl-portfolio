import Header from './components/Header/Header';
import './reset.css'
import './style.css'
import mySelf from './image/self.jpg'
import menu from './image/menu.svg'
import close from './image/close.svg'
import { useState } from 'react';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className='wrapper'>
      <nav className={mobileMenu ? 'mobileMenu mobileMenu_active' : 'mobileMenu'}>
        <ul className='mobileMenuList'>
          <li className='mobileMenu__item'>Home</li>
          <li className='mobileMenu__item'>Skills</li>
          <li className='mobileMenu__item'>About me</li>
          <li className='mobileMenu__item'>Portfolio</li>
          <li className='mobileMenu__item'>Contacts</li>
        </ul>
        <div className='mobileMenuSide'>
          <img className='mobileMenu__close' src={close} alt="close" onClick={() => {setMobileMenu(!mobileMenu)}} />
          <span className='mobileMenu__langToggle'> 
            <span className='mobileMenu__langRu'>RU</span> | <span className='mobileMenu__langEng mobileMenu__langEng_active'>ENG</span>
          </span>
        </div>
      </nav>
        <Header/>
        <main>
          <div className='home'>
            <div className='home__content _container'>
              <div className='home__title'>
                <span className='home__name'>Denis Novik</span>
                <span className='home__prof'>UX | UI designer 24 years old, Minsk</span>
                <span className='home__langToggle'> 
                  <span className='home__langRu'>RU</span> | <span className='home__langEng home__langEng_active'>ENG</span>
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
