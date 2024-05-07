import React, {useContext, useEffect} from "react"
import { StateContext } from "./context/StateContext"

function Pot(){

  const {totalPot, setTotalPot, gameOn, playerCount} = useContext(StateContext)

  useEffect(()=>{
    if(gameOn) setTotalPot(totalPot + playerCount)

    if(!gameOn) setTimeout(()=>setTotalPot(0), 2000)
  },[gameOn])

  return(
    <>
      <div className="card">
        <h2> Total Pot: {totalPot} </h2>
      </div>
    </>
  )

}
export default Pot