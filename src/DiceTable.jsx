import React, {useContext} from 'react'
import { StateContext } from './context/StateContext'

function DiceTable(){

  const {di, setDi} = useContext(StateContext)

  return(
    <>
      {di}
    </>
  )
}

export default DiceTable