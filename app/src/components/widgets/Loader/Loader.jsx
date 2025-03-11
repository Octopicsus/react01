import { useState } from "react";
import "./Loader.css";

function Loader({ levelsCount = 7 }) {
  const [value, setValue] = useState(0);
  const maxRange = 100;

  const handleIncrease = () => {
    if (value < maxRange) {
      const newValue = value + 10;
      console.log(newValue);

      if (newValue === maxRange) {
        setValue(newValue + 1);
      } else {
        setValue(newValue);
      }
    }
  };

  let invertValue = maxRange - value;
  let stepValue = maxRange / levelsCount;
  let stepIndex = Math.floor(invertValue / stepValue);

  const loaderSections = [];

  for (let i = 0; i < levelsCount; i++) {
    let className = "loaderSection";

    if (i <= stepIndex) {
      className += " filler";
    }

    loaderSections.push(<div className={className} key={i}></div>);
  }

  // if ((value = maxRange + 1)) {
  //   value = value - 1;
  // }

  return (
    <div className="loaderWrapper">
      <div className="loader">{loaderSections}</div>
      <button className="increaseButton" onClick={handleIncrease}>
        Click
      </button>
      <h5>{value === 101 ? "100%" : `${value}%`}</h5>
    </div>
  );
}

export default Loader;
