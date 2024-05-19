import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner(){
  
  const navigate = useNavigate()

  return(
    <div diplay='flex' flex-direction='row' width='30vw'>
      <h1> King's Chronicle </h1>
      <div>
        <button onClick={() => navigate('/')}>Game</button>
        <button onClick={() => navigate('/rules')}>Rules</button>
      </div>
  </div>
  )
}