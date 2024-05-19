import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './context/StateContext'
import './Di.css'
import dice1 from './assets/red-one-di.png'
import dice2 from './assets/red-two-di.png'
import dice3 from './assets/red-three-di.png'
import dice4 from './assets/red-four-di.png'
import dice5 from './assets/red-five-di.png'
import dice6 from './assets/red-six-di.png'

function DiceTable(){

  const [fighters, setfighters] = useState([null, null])
  const [rolling, setRolling] = useState(false)

  const {di, duplicate, turn, kingDi, setKingDi, king, setKing, duel, setDuel, setEndTurn, challengerDi, setChallengerDi, defenderDi, setDefenderDi, rollAgain, setRollAgain, gameOn} = useContext(StateContext)

  useEffect(() => {
    //console.log('i see roll again has changed')
    if(rollAgain) {
      //console.log('it should be changing back in a sec')
      setTimeout(()=> setRollAgain(false), 2000)
    }
  }, [rollAgain])

  useEffect(()=> {
    setRolling(true)
  },[di, duplicate])

  useEffect(() => {
    setRolling(false)
  },[turn])

  //useEffect that sets fighters array. this ensures both values are present before duel start
  useEffect(() => {

    if(challengerDi === 3){
      setRollAgain(true)
      setTimeout(()=> setChallengerDi(null),2000)
      return
    }
    if(defenderDi === 3){
      setRollAgain(true)
      setTimeout(()=> setDefenderDi(null),2000)
      return
    }

    if(challengerDi && defenderDi) setfighters([challengerDi, defenderDi])

  }, [challengerDi, defenderDi])

  //fires duel only once both values have been submitted into fighters state
  useEffect(() => {

    //console.log('fighters', fighters)
    if(gameOn) startDuel(fighters[0], fighters[1])

  }, [fighters])

  const diFaces = [dice1, dice2, dice3, dice4, dice5, dice6]

const startDuel = (attack, defend) => {

  // console.log('attack', attack)
  // console.log('defend', defend)

  if(attack > defend){
    setKing(turn)
    setKingDi(attack)
  }
  else if(attack === defend){
    setRollAgain(true)
    setTimeout(() => {
      setChallengerDi(null)
      setDefenderDi(null)
    }, 2000)
    return
  }
  else setKingDi(defend)
  setTimeout(()=>{
    setChallengerDi(null)
    setDefenderDi(null)
    setDuel(false)
    setEndTurn(true)
  }, 2000)

  return
}

  return(
    <div className='table'>
   {di && (<img src={diFaces[di -1]} alt="di"  className={`Di ${rolling && 'Die-shaking'}`} ></img>)}
    {king && <h2> King: Player {king}</h2>}
    { kingDi > 0 && !duel &&(<h2> King's Di: {kingDi}</h2>)}
    
    {duel && (
    <div className='Duel'> 
      <div className='duelSpace'> 
      <h2> Challenger's Di {challengerDi} </h2>
      {challengerDi && (<img src={diFaces[challengerDi -1]} alt="di" className={`Di ${challengerDi && 'Die-shaking'}`}></img>)}
      </div>
      <div className='duelSpace'>
        <h2>vs</h2> 
      </div>
      <div className='duelSpace'>
        <h2> Defender's Di {defenderDi}</h2>
        {defenderDi && (<img src={diFaces[defenderDi -1]} alt="di"  className={`Di ${defenderDi && 'Die-shaking'}`} ></img>)}
      </div>
      
    </div>)}
      {king && !gameOn && ( <h3> Player {king} Wins!</h3>)}
    {rollAgain && (<h2> Roll Again! </h2>)}
    </div>
  )
}

export default DiceTable