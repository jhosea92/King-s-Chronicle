import React, {useState} from "react";
import './App.css'

function Player(props){

  const [playerName, setPlayerName] = useState('');

  const onPlayerNameUpdate = (e) => {
    e.preventDefault();

    setPlayerName(event.target.value);
  }

  const placeholder = 'Player' + props.num;

  return(
    <>
      <form id="formBasicPlayer">
        <label> Name </label>
        <input
        id="playerName"
        type="text"
        placeholder={placeholder}
        value={playerName}
        onChange={onPlayerNameUpdate}
        />
      </form>
    </>
  )

};

export default Player