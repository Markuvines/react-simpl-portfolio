import React from 'react';
import star from '../../image/Star.svg'
import starEmpty from '../../image/StarEmpty.svg'
import './StarRate.css'

const StarRate = ({stars}) => {
  const starsFill = () => {
    let arr = [];
    for (let i = 0; i < stars; i++) {
      arr.push(<img className='' src={star} alt="star" key={Math.random()}/>)
    }
    return arr
  }
  const starsEmpty = () => {
    let arr = [];
    for (let i = 0; i < 5 - stars; i++) {
      arr.push(<img className='' src={starEmpty} alt="star" key={Math.random()}/>)
    }
    return arr
  }
  return (
    <div className='skills__starRate'>
      {starsFill()}
      {starsEmpty()}
    </div>
  );
};

export default StarRate;