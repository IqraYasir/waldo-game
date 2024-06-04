import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../pages/game/Game.module.css';

import waldo from '../assets/characters/waldo.webp';
import odlaw from '../assets/characters/odlaw.webp';
import whitebeard from '../assets/characters/whitebeard.webp';
import wilma from '../assets/characters/wilma.jpg'

const characters = [{name: 'waldo', url: waldo},
    {name: 'odlaw', url: odlaw},
    {name: 'whitebeard', url: whitebeard},
    {name: 'wilma', url: wilma}];

const keys = [
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
]

const Dropdown = () => {
  const [imageSelected, setImageSelected] = useState(null);
  
  const handleClick = (e) => {
    const newImage = e.target;
    setImageSelected(newImage);
  }

  return (
    <div className={styles.menu}>
        <h2>Which character?</h2>
        <div>
          {characters.map((element, index) => {
            return (<img
              key={keys[index]}
              src={element.url}
              onClick={handleClick}
              className={classNames(styles.char,
                  imageSelected && 
                  imageSelected.src.includes(element.name) &&
                   styles.selected
                )}
            />)
          })}
        </div>
    </div>
  )
}

export default Dropdown;