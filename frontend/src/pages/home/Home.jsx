import React from 'react'
import image from '../../assets/game.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='game_container'>
        <img className='game_image' src={image} />
        <div className='inner_container'>
          <h1 className='header'>Where&apos;s Waldo?</h1>
          <Link to='/play'><button className='button'>Play!</button></Link>
        </div>
    </div>
  )
}

export default Home