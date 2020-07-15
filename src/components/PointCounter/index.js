import React from 'react'
import './styles.scss';

const PointCounter = (props) => {
  console.log(props.numberOfActiveRunes)
  const { numberOfActiveRunes, totalPoints } = props;
  const pointsRemaining = totalPoints - numberOfActiveRunes;
  return (
    <div className="point-counter">
      <span className="points">{pointsRemaining}/{totalPoints}</span>
      <span className="points-spent">Points Spent</span>
    </div>
  )
}

export default PointCounter;