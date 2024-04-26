import React, {useState, useContext} from "react";
import './App.css'
import { StateContext } from "./context/StateContext";


function Player(props){

  const [playerName, setPlayerName] = useState('');
  const {di, setDi} = useContext(StateContext)
  const {totalPot, setTotalPot} = useContext(StateContext)


  const onPlayerNameUpdate = (e) => {
    e.preventDefault();

    setPlayerName(event.target.value);
  }

  const placeholder = 'Player' + props.num;

  const rollDi = (e) =>{

    setTotalPot(totalPot +1)

    const roll = Math.floor(Math.random() * (6 - 1) + 1)
    setDi(roll);
  }

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

      <button onClick={rollDi}> 
        Roll
      </button>
    </>
  )

};

export default Player