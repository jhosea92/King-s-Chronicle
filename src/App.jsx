import { useState, useContext, useEffect } from 'react'
import './App.css'
import PlayerContainer from './PlayerContainer'
import Pot from './Pot'
import { StateContext } from './context/StateContext'
import DiceTable from './DiceTable'

function App() {
  const [toggle, setToggle] = useState(false)
  
  const {gameOn, setGameOn, playerCount, turn, setTurn, setOutCount, king, endTurn, setEndTurn} = useContext(StateContext)

  //goes to the next turn when endTurn is activated
  useEffect(() => {

    if(!gameOn) return

    if(endTurn){
      setEndTurn(false)
      console.log('end of turn for player ' + turn)
      if(turn +1 > playerCount) setTurn(1)
      else setTurn(turn+1)
    }
  }, [endTurn])

  const newGame = (e) => {
    e.preventDefault();
    if(playerCount < 2) {
      setToggle(true)
      setTimeout(()=> setToggle(false), 3000)
    }

    else {
      setGameOn(true)
      setOutCount(0);
      if(!king) setTurn(1)
      else setTurn(king)
    }
  }

  return (
    <>
    {!gameOn && <button onClick={newGame}> New Game </button>}
    {toggle && (<p>Add another player to get started</p>)}
    <DiceTable/>
    <Pot/>
    <PlayerContainer/>
    </>
  )
}

export default App
