import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content _container'>
        <ul className='header__list'>
         <li className='header__item'>Home</li>
         <li className='header__item'>About me</li>
         <li className='header__item'>Skills</li>
         <li className='header__item'>Portfolio</li>
         <li className='header__item'>Contacts</li>
        </ul>
      </div>
     </header>
  );
};

export default Header;