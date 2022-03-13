import Header from './components/Header/Header';
import './reset.css'
import './style.css'
import { useState } from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  const [lang, setLang] = useState('eng')
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='wrapper'>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} lang={lang} setLang={setLang}/>
      <Header lang ={lang}/>
      <main>
        <Home mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} lang={lang} setLang={setLang}/>
        <AboutMe lang={lang}/>
        <Skills lang={lang}/>
      </main>
    </div>
  );
}

export default App;
