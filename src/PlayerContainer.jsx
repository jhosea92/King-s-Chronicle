import React, {useEffect, useState, useContext} from 'react';
import { StateContext } from './context/StateContext';
import Player from './Player';

function PlayerContainer(){

const [players, setPlayers] = useState([<Player key={1} num={1}/>]);

const {playerCount, setPlayerCount} = useContext(StateContext);
const {gameOn} = useContext(StateContext)

useEffect(() => {

  if(players.length < playerCount) setPlayers([...players,<Player key ={playerCount}num={playerCount}/>])
  if(players.length > playerCount) setPlayers(players.slice(0, -1))

}, [playerCount])

const addPlayer = (e) =>{
  
  if(playerCount < 6) setPlayerCount(playerCount +1)
}

const removePlayer = (e) =>{
  
  if(playerCount >1) setPlayerCount(playerCount -1)
}

return(
  <>
   {!gameOn && 
   (<>
   <button onClick={addPlayer}> Add Player</button>
    <button onClick={removePlayer}> Remove Player</button>
    </>)}
    {players}
  </>
  
)

}

export default PlayerContainer