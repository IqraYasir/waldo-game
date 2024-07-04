import React from 'react'
import PropTypes from 'prop-types'
import styles from '../pages/game/Game.module.css';
import getCoordinates from '../scripts/coordinates' 

const Target = props => {
  const x = props.posX - 15;
  const y = props.posY - 15;
  getCoordinates(x, y);
  return (<div className={styles.target} style={{ left: x, top: y}}></div>)
}

Target.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
}

export default Target;