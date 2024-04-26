import React, {useEffect, useState} from 'react';
import Player from './Player';

function PlayerContainer(){
const [playerCount, setPlayerCount] = useState(1);
const [players, setPlayers] = useState([<Player num={1}/>]);

useEffect(() => {

  if(players.length < playerCount) setPlayers([...players,<Player num={playerCount}/>])
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
    <button onClick={addPlayer}> Add Player</button>
    <button onClick={removePlayer}> Remove Player</button>
    {players}
  </>
  
)

}

export default PlayerContainer