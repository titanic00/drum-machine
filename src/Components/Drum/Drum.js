import React, { useEffect } from "react";
import "./Drum.css";
import { sounds } from "./sounds";
import { sounds_bank } from "./sounds";

const sound = new Audio();

export function Drum(props) {
  const handlePress = (event) => {
    if (props.bank) {
      sound.src = sounds_bank[event.key].sound;
      sound.id = sounds_bank[event.key].id;
      props.currentSound(sounds_bank[event.key].id);
    } else {
      sound.src = sounds[event.key].sound;
      sound.id = sounds[event.key].id;
      props.currentSound(sounds[event.key].id);
    }

    sound.volume = props.volume;
    sound.pause();

    sound.play();
  };

  useEffect(() => {
    if (props.powerCheck) window.addEventListener("keydown", handlePress);

    return function cleanup() {
      window.removeEventListener("keydown", handlePress);
    };
  });

  return (
    <div id="drum-container">
      <div className="drum-buttons">
        <div className="drum-button" id="Heater 1">
          Q
        </div>
        <div className="drum-button" id="Heater 2">
          W
        </div>
        <div className="drum-button" id="Heater 3">
          E
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="Heater 4">
          A
        </div>
        <div className="drum-button" id="Clap">
          S
        </div>
        <div className="drum-button" id="Open HH">
          D
        </div>
      </div>
      <div className="drum-buttons">
        <div className="drum-button" id="Kick n' Hat">
          Z
        </div>
        <div className="drum-button" id="Kick">
          X
        </div>
        <div className="drum-button" id="Closed HH">
          C
        </div>
      </div>
    </div>
  );
}
