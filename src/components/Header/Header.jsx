import React from 'react';
import './Header.css'

const Header = ({lang}) => {
  const langSwitch = (lang) => {
    switch(lang) {
      case 'eng': {
        return(
      <>
         <li className='header__item'>Home</li>
         <li className='header__item'>About me</li>
         <li className='header__item'>Skills</li>
         <li className='header__item'>Portfolio</li>
         <li className='header__item'>Contacts</li>
      </>)
      } 
      case 'ru': {
        return(
      <>
         <li className='header__item'>Главное</li>
         <li className='header__item'>Обо мне</li>
         <li className='header__item'>Навыки</li>
         <li className='header__item'>Портфолио</li>
         <li className='header__item'>Контакты</li>
      </>)
      } 
    }}
  
  return (
    <header className='header'>
      <div className='header__content _container'>
        <ul className='header__list'>
        {langSwitch(lang)}
         {/* <li className='header__item'>Home</li>
         <li className='header__item'>About me</li>
         <li className='header__item'>Skills</li>
         <li className='header__item'>Portfolio</li>
         <li className='header__item'>Contacts</li> */}
        </ul>
      </div>
     </header>
  );
};

export default Header;