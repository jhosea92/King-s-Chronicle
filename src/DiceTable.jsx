import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './context/StateContext'

function DiceTable(){

  const [fighters, setfighters] = useState([null, null])
  const [toggle, setToggle] = useState(false)

  const {di, turn, kingDi, setKingDi, king, setKing, duel, setDuel, setEndTurn, challengerDi, setChallengerDi, defenderDi, setDefenderDi} = useContext(StateContext)

  //useEffect that sets fighters array. this ensures both values are present before duel start
  useEffect(() => {

    if(challengerDi && defenderDi) setfighters([challengerDi, defenderDi])


  }, [challengerDi, defenderDi])

  //fires duel only once both values have been submitted into fighters state
  useEffect(() => {

    console.log('fighters', fighters)
    startDuel(fighters[0], fighters[1])

  }, [fighters])

const startDuel = (attack, defend) => {

  console.log('attack', attack)
  console.log('defend', defend)

  if(attack > defend){
    setKing(turn)
    setKingDi(attack)
  }
  else if(attack === defend){
    setToggle(true)
    setTimeout(()=> setToggle(false), 3000)
    setChallengerDi(null)
    setDefenderDi(null)
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
    <div>
    <h1>
      {di}
    </h1>
    {king && <h2> King: {king}</h2>}
    { kingDi > 0 && !duel &&(<h2> King's Di: {kingDi}</h2>)}
    {duel && ( <div className='Duel'> <h2> Challenger's Di {challengerDi} </h2>
    <h2>vs</h2> 
    <h2> King's Di {defenderDi}</h2>
    {toggle && (<h2> Roll Again! </h2>)}
    </div>)}
    </div>
  )
}

export default DiceTable