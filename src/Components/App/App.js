import "./App.css";
import { Drum } from "../Drum/Drum";

function App() {
  return (
    <div id="container">
      <Drum />
      <div id="toggle-container">
        <div className="toggle">
          <div className="toggle-button button-1">p</div>
        </div>
        <div id="current-sound">
          p
        </div>
        <div id="change-volume">
          <input type="range" min="0" max="100" />
        </div>
        <div className="toggle">
          <div className="toggle-button">p</div>
        </div>
      </div>
    </div>
  );
}

export default App;