import React, {useContext} from "react"
import { StateContext } from "./context/StateContext"

function Pot(){

  const {totalPot, setTotalPot} = useContext(StateContext)

  return(
    <>
      <div classname="card">
        <p> Total Pot: {totalPot}</p>
      </div>
    </>
  )

}
export default Pot