import "./App.css";
import { Drum } from "../Drum/Drum";
import { useState } from "react";

function App() {
  const [isClicked, clickState] = useState(false);

  const handleClick = () => {
    if(isClicked) {
      clickState(false);
      return;
    }
    clickState(true);
  }

  return (
    <div id="container">
      <Drum />
      <div id="toggle-container">
        <div className="text-and-toggle">
          <span className="text">Power</span>
          <div className="toggle">
            <div className="toggle-button" onClick={handleClick} style={{float: isClicked ? "right" : "left"}}>p</div>
          </div>
        </div>
        <div id="current-sound">p</div>
        <div id="change-volume">
          <input type="range" min="0" max="100" />
        </div>
        <div className="text-and-toggle">
          <span className="text">Bank</span>
          <div className="toggle">
            <div className="toggle-button">p</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
