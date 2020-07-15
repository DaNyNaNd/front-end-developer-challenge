import React, { useState } from 'react';
import Rune from '../Rune';
import PointCounter from '../PointCounter';
import './styles.scss'

const RuneBoard = () => {
  const totalPoints = 6;
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

  const initialSetup = runePaths.map(paths => {
    return paths.map(path => {
      return { name: path, active: false }
    })
  })

  const [selectedRunes, setSelectedRunes] = useState(initialSetup);
  const [numberOfActiveRunes, setNumberOfActiveRunes] = useState(0);

  const countActiveRunes = (runeArray) => {
    let activeRunes = 0;
    runeArray.forEach(paths => {
      return paths.forEach(path => {
        if (path.active === true) activeRunes++
      })
    })
    setNumberOfActiveRunes(activeRunes);
  }

  const updateRunes = (clickType, pathIndex, runeIndex) => {
    const newSelectedRunes = [...selectedRunes];
      if(clickType === 'click') {
        if (numberOfActiveRunes >= totalPoints) {
          alert("You've selected the maximum amount of runes available. Play more to unlock additional runes.");
          return;
        }
        if (runeIndex === 0) newSelectedRunes[pathIndex][runeIndex].active = true; 
        else if (newSelectedRunes[pathIndex][runeIndex - 1].active === false) {
          alert("You must select each rune in sequential order. Make sure the previous runes in this path have been activated.");
          return;
        }
        else
          newSelectedRunes[pathIndex][runeIndex].active = true;
      } else if (clickType === 'contextmenu') {
        for (let i = runeIndex; i <= newSelectedRunes.length + 1; i++) {
          newSelectedRunes[pathIndex][i].active = false;
        }
      }
    setSelectedRunes(newSelectedRunes);
    countActiveRunes(newSelectedRunes)
  };

  return (
    <>
      <div className="rune-board">
        {selectedRunes.map((runes, pathIndex) => {
          const paths = runes.map(({ name, active }, runeIndex) => (
            <Rune
              onClick={updateRunes}
              key={name}
              name={name}
              active={active}
              pathIndex={pathIndex}
              runeIndex={runeIndex}
            /> 
          )) 
          return (
            <div key={`pc${pathIndex}`} className="path-container">
              <span className="talent-path">TALENT PATH {pathIndex + 1}</span>
              <div className="rune-path">{paths}</div>
            </div>
          )
        })}
      </div>
      <PointCounter 
        numberOfActiveRunes={numberOfActiveRunes}
        totalPoints={totalPoints}
      />
    </>
  )
};

export default RuneBoard;