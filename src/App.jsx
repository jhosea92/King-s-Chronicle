import { useState, useContext, useEffect } from 'react'
import './App.css'
import PlayerContainer from './PlayerContainer'
import Pot from './Pot'
import { StateContext } from './context/StateContext'
import DiceTable from './DiceTable'

function App() {
  const [toggle, setToggle] = useState(false)
  const [localTurn, setLocalTurn] = useState(0)
  const [gameNum, setGameNum] = useState(0)
  const [round, setRound] = useState(0)
  
  const {gameOn, setGameOn, setTurn, turn, setOutCount, king, endTurn, setEndTurn, players} = useContext(StateContext)

  //goes to the next turn when endTurn is activated
  useEffect(() => {

    //console.log('localTurn', localTurn)

    if(!gameOn) return

    if(endTurn){
      setEndTurn(false)
      //console.log('end of turn for player ' + players[localTurn].props.num)
      setTimeout(() => {
        if(localTurn +1 > players.length -1) {
          setRound(round +1)
          setLocalTurn(0)
          setTurn(players[0].props.num)
        }
  
        else {
          setLocalTurn(localTurn+1)
          setTurn(players[localTurn+1].props.num)
        }
      }, 500)

    }
  }, [endTurn])

  useEffect(() => {
    if(gameOn) setRound(1)
    if(!gameOn) setRound(0)
  }, [gameOn])

  const newGame = (e) => {
    e.preventDefault();
    if(players.length < 2) {
      setToggle(true)
      setTimeout(()=> setToggle(false), 3000)
    }

    else {
      setGameOn(true)
      setGameNum(gameNum +1)
      setOutCount(0);
      if(!king) setTurn(players[localTurn].props.num)
      else setTurn(king)
    }
  }

  return (
    <div display='grid' align="center">
      {!gameOn && <button onClick={newGame}> New Game </button>}
      <div className='box'>
        <div>
          <h2>Game # {gameNum}</h2> 
        </div> 
        <div>
          <h2> Round # {round} </h2>
        </div>
      </div>
      {toggle && (<p>Add another player to get started</p>)}
      <DiceTable/>
      <Pot/>
      <PlayerContainer/>
    </div>
  )
}

export default App
