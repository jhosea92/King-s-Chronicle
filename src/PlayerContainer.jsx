import React, {useState, useEffect, useContext} from 'react';
import { StateContext } from './context/StateContext';
import Player from './Player';

function PlayerContainer() {

const [count, setCount] = useState(1)

const {players, setPlayers, gameOn} = useContext(StateContext);


useEffect(() => {

  if(!gameOn && players.length === 0) setPlayers([<Player key={0} num={1}/>])

}, [gameOn])

const addPlayer = (e) => {
  
  if(players.length < 6) {
   
    setPlayers([...players,<Player key ={count}num={count +1}/>])
    setCount(count +1)
  }
}


const style1 = {
    display: 'grid',
    margin: 'auto',
    // border: '3px solid green',
    padding: '10px',
}

const style2 = {
  display: 'flex',
  'justifyContent': 'center'
}

return(
  <div style={style1}>
   {!gameOn && 
   (<div>
   <button onClick={addPlayer}> Add Player</button>
    </div>)}
    <div style={style2} >
    {players}
    </div>
  </div>
  
)

}

export default PlayerContainer