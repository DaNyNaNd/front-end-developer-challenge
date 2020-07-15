import React, { useEffect, useState } from "react";
import "./styles.scss";

const Rune = (props) => {
  const [toggledRune, setToggledRune] = useState(props.name);

  useEffect(() => {
    if (props.active) setToggledRune(props.name);
    else if (!props.active) {
      const runeInactive = `${props.name}-inactive`;
      setToggledRune(runeInactive);
    }
  }, [props.active]);

  const toggleRune = (e) => {
    e.preventDefault();
    props.onClick(e.type, props.pathIndex, props.runeIndex);
  }

  return (<div 
    className={`rune-image ${toggledRune}`}
    onClick={e => toggleRune(e)}
    onContextMenu={e => toggleRune(e)}
  />);
}

export default Rune;
