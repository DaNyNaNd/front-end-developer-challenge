import React from 'react';
import Rune from '../Rune';
import './styles.scss'

const RuneBoard = () => {
  const runePaths = [
    [
    "chevron",
    "silverware",
    "cake",
    "crown"
  ], [
    "skimask",
    "snorkel",
    "lightning",
    "skull"
  ]];

  return (
    <>
      {runePaths.map((path, index) => {
        const paths = path.map((pathName) => (
          <Rune name={pathName} /> 
        )) 
        return (
          <>
            <span className="talent-path">TALENT PATH {index + 1}</span>
            <div>{paths}</div>
          </>
        )
      })}
    </>
  )
};

export default RuneBoard;