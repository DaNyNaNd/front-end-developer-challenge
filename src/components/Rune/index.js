import React, { useState } from "react";
import "./styles.scss";

const Rune = (props) => {
  const [toggledRune, setToggledRune] = useState(`${props.name}-inactive`);

  const toggleRune = (e) => {
    e.preventDefault();
    if(e.type === 'click')
      setToggledRune(props.name)
    else if (e.type === 'contextmenu')
      setToggledRune(`${props.name}-inactive`)
  }

  return (<div 
    className={`rune-image ${toggledRune}`}
    onClick={e => toggleRune(e)}
    onContextMenu={e => toggleRune(e)}
  />);
}

export default Rune;
