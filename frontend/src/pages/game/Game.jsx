import React from 'react';
import styles from './Game.module.css';
import image from '../../assets/game.png';
import Clock from '../../components/Clock';
import Dropdown from '../../components/Dropdown';

const Game = () => {
  return (
    <div>
        <Clock />
        <img className={styles.play_image} src={image} onClick={onclick} />
        <Dropdown />
    </div>
  )
}

export default Game;