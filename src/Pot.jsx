import React, {useContext, useEffect} from "react"
import { StateContext } from "./context/StateContext"

function Pot(){

  const {totalPot, setTotalPot, gameOn} = useContext(StateContext)

  useEffect(()=>{
    if(!gameOn) setTimeout(()=>setTotalPot(0), 3000)
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