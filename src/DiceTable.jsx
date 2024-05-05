import React, {useContext, useEffect} from 'react'
import { StateContext } from './context/StateContext'

function DiceTable(){

  const {di, kingDi, king, duel, challengerDi, defenderDi} = useContext(StateContext)

  return(
    <>
    <h1>
      {di}
    </h1>
    {king && <h2> King: {king}</h2>}
    { kingDi > 0 && !duel &&(<h2> King's Di: {kingDi}</h2>)}
    {duel && ( <h2> Challenger's Di {challengerDi} vs the King's Di {defenderDi}</h2>)}
    </>
  )
}

export default DiceTable