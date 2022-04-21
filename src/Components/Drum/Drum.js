import React, { useEffect } from "react";
import "./Drum.css";

import { sounds } from "./sounds";
import { sounds_bank } from "./sounds";

export function Drum(props) {
  const setButtonStyle = (element, isClicked) => {
    if (isClicked) {
      element.setAttribute("style", "background-color: rgb(184, 126, 19)");
    } else {
      element.setAttribute("style", "background-color: orange");
    }
  };

  const handleClick = (event) => {
    const elementId = event.target.children[0].id;
    setButtonStyle(event.target, true);
    if (!props.powerCheck) {
      return;
    } else if (props.bank) {
      const audio = event.target.children[`${elementId}`];
      audio.src = sounds_bank[`${elementId}`].sound;
      props.currentSound(sounds_bank[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    } else {
      const audio = event.target.children[`${elementId}`];
      audio.src = sounds[`${elementId}`].sound;
      props.currentSound(sounds[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    }
    setTimeout(() => {setButtonStyle(event.target, false);}, 100);
  };

  const handleKeyboard = (event) => {
    const elementId = event.key;
    setButtonStyle(document.getElementById(`${elementId}`).parentElement, true);
    if (props.bank) {
      const audio = document.getElementById(`${elementId}`);
      audio.src = sounds_bank[`${elementId}`].sound;
      props.currentSound(sounds_bank[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    } else {
      const audio = document.getElementById(`${elementId}`);
      audio.src = sounds[`${elementId}`].sound;
      props.currentSound(sounds[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    }
    setTimeout(() => {setButtonStyle(document.getElementById(`${elementId}`).parentElement, false);}, 100);
  };

  useEffect(() => {
    if (props.powerCheck) window.addEventListener("keypress", handleKeyboard);

    return function cleanup() {
      window.removeEventListener("keypress", handleKeyboard);
    };
  });

  return (
    <div id="drum-container">
      <div className="drum-buttons">
        <div className="drum-button" id="Heater 1" onClick={handleClick}>
          Q<audio id="q"></audio>
        </div>
        <div className="drum-button" id="Heater 2" onClick={handleClick}>
          W<audio id="w"></audio>
        </div>
        <div className="drum-button" id="Heater 3" onClick={handleClick}>
          E<audio id="e"></audio>
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="Heater 4" onClick={handleClick}>
          A<audio id="a"></audio>
        </div>
        <div className="drum-button" id="Clap" onClick={handleClick}>
          S<audio id="s"></audio>
        </div>
        <div className="drum-button" id="Open HH" onClick={handleClick}>
          D<audio id="d"></audio>
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="Kick n' Hat" onClick={handleClick}>
          Z<audio id="z"></audio>
        </div>
        <div className="drum-button" id="Kick" onClick={handleClick}>
          X<audio id="x"></audio>
        </div>
        <div className="drum-button" id="Closed HH" onClick={handleClick}>
          C<audio id="c"></audio>
        </div>
      </div>
    </div>
  );
}
