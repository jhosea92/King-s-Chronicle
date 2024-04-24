import React, {useEffect, useState} from 'react';
import Player from './Player';

function PlayerContainer(){
const [playerCount, setPlayerCount] = useState(1);
const [players, setPlayers] = useState([<Player num={1}/>]);

useEffect(() => {

  if(players.length < playerCount) setPlayers([...players,<Player num={playerCount}/>])
  if(players.length > playerCount) setPlayers(players.slice(-1))

}, [playerCount])

console.log('playerCount', playerCount)
console.log('players', players)

return(
  <>
    {players}
  </>
  
)

}

export default PlayerContainer