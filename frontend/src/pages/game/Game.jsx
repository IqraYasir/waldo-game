import React from 'react';

import styles from './Game.module.css';
import image from '../../assets/game.png';
import Clock from '../../components/Clock.jsx';
import Dropdown from '../../components/Dropdown.jsx';

const Game = () => {
  return (
    <div className={styles.container}>
        <Clock />
        <img className={styles.play_image} src={image} onClick={onclick} />
        <Dropdown />
    </div>
  )
}

export default Game;