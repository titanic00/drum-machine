import React from "react";
import "./Drum.css";

export function Drum(props) {
  return (
    <div id="drum-container">
      <div className="drum-buttons">
        <div className="drum-button" id="q">
          Q
        </div>
        <div className="drum-button" id="w">
          W
        </div>
        <div className="drum-button" id="e">
          E
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="a">
          A
        </div>
        <div className="drum-button" id="s">
          S
        </div>
        <div className="drum-button" id="d">
          D
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="z">
          Z
        </div>
        <div className="drum-button" id="x">
          X
        </div>
        <div className="drum-button" id="c">
          C
        </div>
      </div>
    </div>
  );
}
