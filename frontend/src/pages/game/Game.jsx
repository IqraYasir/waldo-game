import React, { useEffect, useState } from 'react';

import styles from './Game.module.css';
import image from '../../assets/game.png';

import Clock from '../../components/Clock.jsx';
import Dropdown from '../../components/Dropdown.jsx';
import Target from '../../components/Target.jsx';


const Game = () => {
  const [targetState, setTargetState] = useState([]);
  const handleClick = (e) => {
    const newObject = [
      {posX: e.pageX, posY: e.pageY, key: Math.random()}
    ];
    setTargetState(newObject);
  };
  
  const clickDivs = targetState.map(element => {
    return(<Target key={element.key} posX={element.posX} posY={element.posY} />)
  });

  return (
    <div className={styles.container}>
        <Clock />
        <div className='image_container' onClick={handleClick}>
          <img className={styles.play_image} src={image} />
          {targetState.length > 0 && clickDivs}
        </div>
        <Dropdown />
    </div>
  )
}

export default Game;