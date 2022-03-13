import React from 'react';
import StarRate from '../StarRate/StarRate';
import './Skill.css'

const Skill = ({skills}) => {
  return (
    <li className='skills__item'>
      <img className='skills__itemImg' src={skills.img} alt={skills.title} />
      <span className='skills__itemTitle'>{skills.title}</span>
      <StarRate stars={skills.starRate}/>
    </li>
  );
};

export default Skill;