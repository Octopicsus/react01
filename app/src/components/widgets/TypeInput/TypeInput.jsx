import { useState } from "react";
import "./TypeInput.css";

function TypeInput() {
  const [currentString, setNewString] = useState('')

  const handleChange = (event) => {
    setNewString(event.target.value);
  }

  return (
    <div className="input-wrapper">
      <h2>{currentString}</h2>
      <input 
        type="text" 
        placeholder='type something ...' 
        value={currentString} 
        onChange={handleChange}
      />
    </div>
  );
}

export default TypeInput;