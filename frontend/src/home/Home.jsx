import React from 'react'
import classnames from 'classnames'
import image from '../assets/game.png'

const Home = () => {
  return (
    <>
        <img className='game_image' src={image} />
        <h1 className={classnames('header home')} >Where&apos;s Waldo?</h1>
        <button className={classnames('button home')}>Play!</button>
    </>
  )
}

export default Home