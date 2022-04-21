import React, { useEffect } from "react";
import "./Drum.css";

export const sounds = {
  q: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "Heater 1",
  },
  w: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "Heater 2",
  },
  e: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "Heater 3",
  },
  a: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "Heater 4",
  },
  s: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "Clap",
  },
  d: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "Open HH",
  },
  z: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Kick n' Hat",
  },
  x: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "Kick",
  },
  c: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "Closed HH",
  },
};

export const sounds_bank = {
  q: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    id: "Chord 1",
  },
  w: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    id: "Chord 2",
  },
  e: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    id: "Chord 3",
  },
  a: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    id: "Shaker",
  },
  s: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    id: "Open HH",
  },
  d: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    id: "Closed HH",
  },
  z: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    id: "Punchy-Kick",
  },
  x: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    id: "Side-Stick",
  },
  c: {
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    id: "Snare",
  },
};

export function Drum(props) {
  const handleClick = (event) => {
    if (!props.powerCheck) {
      return;
    } else if (props.bank) {
      const elementId = event.target.children[0].id;
      const audio = event.target.children[`${elementId}`];
      audio.src = sounds_bank[`${elementId}`].sound;
      props.currentSound(sounds_bank[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    } else {
      const elementId = event.target.children[0].id;
      const audio = event.target.children[`${elementId}`];
      audio.src = sounds[`${elementId}`].sound;
      props.currentSound(sounds[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    }
  };

  const handleKeyboard = (event) => {
    if (props.bank) {
      const elementId = event.key;
      const audio = document.getElementById(`${elementId}`);
      audio.src = sounds_bank[`${elementId}`].sound;
      props.currentSound(sounds_bank[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    } else {
      const elementId = event.key;
      const audio = document.getElementById(`${elementId}`);
      audio.src = sounds[`${elementId}`].sound;
      props.currentSound(sounds[`${elementId}`].id);
      audio.volume = props.volume;
      audio.play();
    }
  };

  useEffect(() => {
    if (props.powerCheck) window.addEventListener("keydown", handleKeyboard);

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyboard);
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
