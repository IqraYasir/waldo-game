import React from 'react';
// import styles from '../pages/game/Game.css';

import waldo from '../assets/characters/waldo.webp';
import odlaw from '../assets/characters/odlaw.webp';
import whitebeard from '../assets/characters/whitebeard.webp';
import wilma from '../assets/characters/wilma.jpg'

const characters = [waldo, odlaw, whitebeard, wilma]

const Dropdown = () => {
  return (
    <div className='menu'>
        <h2>Which character?</h2>
        <div>
          {characters.map(element => {
            return <img 
              key={element} 
              src={element} 
            />
          })}
        </div>
    </div>
  )
}

export default Dropdown