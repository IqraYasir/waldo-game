import React from 'react';
import image from '../../assets/game.png';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.game_container}>
        <img className={styles.game_image} src={image} />
        <div className={styles.inner_container}>
          <h1 className={styles.header}>Where&apos;s Waldo?</h1>
          <Link to='/play'><button className={styles.button}>Play!</button></Link>
        </div>
    </div>
  )
}

export default Home;