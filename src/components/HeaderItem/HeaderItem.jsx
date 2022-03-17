import React from 'react';

const HeaderItem = ({item, lang, stateActive}) => {
  const langSwitch = () => {
    switch (lang) {
      case 'ru' : {
        return <a onClick={() => stateActive({type: item.engTitle})} href={`#${item.anchor}`}>{item.ruTitle}</a>
      }
      case 'eng' : {
        return <a onClick={() => stateActive({type: item.engTitle})} href={`#${item.anchor}`}>{item.engTitle}</a>
      }
    }
  }
  return (
    <li className={`header__item ${item.active ? 'header__item_active': ''}`}>
      {/* <a onClick={() => stateActive({type: item.title})} href={`#${item.anchor}`}>{item.title}</a> */}
      {langSwitch()}
    </li>
  );
};

export default HeaderItem;