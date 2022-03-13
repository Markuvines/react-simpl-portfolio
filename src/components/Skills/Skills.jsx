import React, { useState } from 'react';
import Skill from '../Skill/Skill';
import './Skills.css'
import PS from '../../image/PS.svg'
import AI from '../../image/AI.svg'
import AE from '../../image/AE.svg'
import FIG from '../../image/FIG.svg'

const Skills = ({lang}) => {
  const [skills, setSkills] = useState([
    {title: 'Adobe Photoshop', img: PS, starRate: 4},
    {title: 'Adobe Illustrator', img: AI, starRate: 3},
    {title: 'Adobe After Effects', img: AE, starRate: 4},
    {title: 'Figma', img: FIG, starRate: 4},
  ])
  return (
    <div className='skills'>
      <div className='skills__content _container'>
      {(() => {
        switch(lang) {
          case 'eng': 
            return (
              <>
                <h2 className='skills__title'>Skills</h2>
                <p className='skills__discription'>I work in such programs as</p>
              </>
            )
          case 'ru':
            return(
              <>
                <h2 className='skills__title'>Навыки</h2>
                <p className='skills__discription'>Я работаю в таких программах как</p>
              </>
            )
        }
      })()}
        <ul className='skills__list'>
          {skills.map((item) =>  <Skill skills={item}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Skills;