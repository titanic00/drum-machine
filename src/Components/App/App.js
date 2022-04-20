import "./App.css";
import { Drum } from "../Drum/Drum";
import { useState } from "react";

function App() {
  const [isPowerOff, clickState] = useState(true);
  const [currentSound, setSound] = useState('');
  const [currentVolume, changeVolume] = useState(0.9);
  const [isBank, setBank] = useState(false);

  const handleClick = () => {
    if(!isPowerOff) {
      clickState(true);
      return;
    }
    clickState(false);
  }

  const setNewSound = newSound => {
    setSound(newSound);
  }

  const handleChange = (event) => {
    changeVolume(event.target.value);
    setSound(Math.floor(event.target.value * 100));
  }

  const handleBank = () => {
    if(isBank) {
      setBank(false);
      return;
    }
    setBank(true);
  }

  return (
    <div id="container">
      <Drum currentSound={setNewSound} powerCheck={isPowerOff} volume={currentVolume} bank={isBank} />
      <div id="toggle-container">
        <div className="text-and-toggle">
          <span className="text">Power</span>
          <div className="toggle">
            <div className="toggle-button" onClick={handleClick} style={{float: isPowerOff ? "left" : "right"}}>p</div>
          </div>
        </div>
        <div id="current-sound"><span className="text">{currentSound}</span></div>
        <div id="change-volume" onChange={handleChange}>
          <input id="range" type="range" min="0" max="1" step="0.01" />
        </div>
        <div className="text-and-toggle">
          <span className="text">Bank</span>
          <div className="toggle">
            <div className="toggle-button" onClick={handleBank} style={{float: isBank ? "right" : "left"}}>p</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
