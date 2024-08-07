import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Game.module.css';
import image from '../../assets/game.png';

import Clock from '../../components/Clock.jsx';
import Dropdown from '../../components/Dropdown.jsx';
import Target from '../../components/Target.jsx';
import call from '../../scripts/coordinates.js';

const Game = () => {
  const [targetState, setTargetState] = useState([]);
  const handleClick = (e) => {
    const newObject = [
      {posX: e.pageX, posY: e.pageY, key: Math.random()}
    ];
    call();
    setTargetState(newObject);
  };

  const offClick = (e) => {
    if (targetState.length === 1) {
      setTargetState([]);
    }
  };
  
  const clickDivs = targetState.map(element => {
    return(<Target key={element.key} posX={element.posX} posY={element.posY} />)
  });

  return (
    <div className={styles.container}>
        <Clock />
        <Link to='/'><button>Exit game</button></Link>
        <img className={styles.play_image} src={image} onClick={handleClick} />
        <div>
          {targetState.length === 1 && <button className='button' onClick={offClick}>Remove target</button>}
        </div>
        {targetState.length === 1 && clickDivs}
        {targetState.length === 1 && <Dropdown />}
    </div>
  )
}

export default Game;