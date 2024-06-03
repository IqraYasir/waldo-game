import React from 'react'
import classnames from 'classnames'
import image from '../assets/game.png'
import './Home.css'

const Home = () => {
  return (
    <div className='game_container'>
        <img className='game_image' src={image} />
        <div className='inner_container'>
          <h1 className='header'>Where&apos;s Waldo?</h1>
          <button className='button'>Play!</button>
        </div>
    </div>
  )
}

export default Home