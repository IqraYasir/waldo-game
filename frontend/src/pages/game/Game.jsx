import React from 'react'
import image from '../../assets/game.png'
import Clock from '../../components/Clock'

const Game = () => {
  return (
    <div>
        <Clock />
        <img className='game_image' src={image} onClick={onclick} />
    </div>
  )
}

export default Game