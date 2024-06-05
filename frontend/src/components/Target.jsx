import React from 'react'
import PropTypes from 'prop-types'
import styles from '../pages/game/Game.module.css';


const Target = props => {
  return (<div className={styles.target} style={{ left: props.posX - 20, top: props.posY - 20}}></div>)
}

Target.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
}

export default Target;