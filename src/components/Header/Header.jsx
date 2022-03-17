import React, { useReducer, useState } from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';
import './Header.css'

const initialState = [
  {engTitle: 'Home', ruTitle: 'Главное', anchor:'home', active: false},
  {engTitle: 'About me', ruTitle: 'Обо мне', anchor:'aboutMe', active: false},
  {engTitle: 'Skills', ruTitle: 'Навыки', anchor:'skills', active: false},
  {engTitle: 'Portfolio', ruTitle: 'Портфолио', anchor:'portfolio', active: false},
  {engTitle: 'Contacts', ruTitle: 'Контакты', anchor:'contacts', active: false}
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'Home': {
      return Object.assign([], initialState, {0:{ ...initialState[0], active: true}})
    }
    case 'About me': {
      return Object.assign([], initialState, {1:{ ...initialState[1], active: true}})
    }
    case 'Skills': {
      return Object.assign([], initialState, {2:{ ...initialState[2], active: true}})
    }
    case 'Portfolio': {
      return Object.assign([], initialState, {3:{ ...initialState[3], active: true}})
    }
    case 'Contacts': {
      return Object.assign([], initialState, {4:{ ...initialState[4], active: true}})
    }
  }
}

const Header = ({lang}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isActive, setActive] = useState ([
    {title: 'Home', active: true},
    {title: 'About me', active: false},
    {title: 'Skills', active: false},
    {title: 'Portfolio', active: false},
    {title: 'Contacts', active: false}
  ])
  const langSwitch = (lang) => {
    switch(lang) {
      case 'eng': {
        return(
      <>
        {}
        {/* <li className={`header__item ${isActive ? 'header__item_active':''}`}>
          <a href="#home">Home</a>
        </li>
         <li className='header__item'><a href="#aboutMe">About me</a></li>
         <li className='header__item'><a href="#skills">Skills</a></li>
         <li className='header__item'><a href="#portfolio">Portfolio</a></li>
         <li className='header__item'><a href="#contacts">Contacts</a></li> */}
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
        {state.map((item) => <HeaderItem item={item} lang={lang} stateActive={dispatch} />)}
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