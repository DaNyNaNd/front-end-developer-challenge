import React from 'react'
import './styles.scss';

const PointCounter = (props) => {
  return (
    <>
      <span className="points">6/6</span>
      <span className="points-spent">Points Spent</span>
    </>
  )
}

export default PointCounter;