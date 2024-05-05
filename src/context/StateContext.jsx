import React, {useState, createContext} from "react";

const StateContext = createContext(null);

const StateProvider = ({children}) => {
  const [totalPot, setTotalPot] = useState(0)
  const [playerCount, setPlayerCount] = useState(1);
  const [di, setDi] = useState(null)
  const [gameOn, setGameOn] = useState(false)
  const [turn, setTurn] = useState(0);
  const [outCount, setOutCount] = useState(null)
  const [king, setKing] = useState(null)
  const [kingDi, setKingDi] = useState(null)
  const [endTurn, setEndTurn] = useState(false)
  const [duplicate, setDuplicate] = useState(false)
  const [duel, setDuel] = useState(false)
  const [defenderDi, setDefenderDi] = useState(null)
  const [challengerDi, setChallengerDi] = useState(null)
 
  return(
    <StateContext.Provider value={{totalPot, setTotalPot, di, setDi, gameOn, setGameOn, playerCount, setPlayerCount, turn, setTurn, outCount, setOutCount, king, setKing, kingDi, setKingDi, endTurn, setEndTurn, duplicate, setDuplicate, duel, setDuel, challengerDi, setChallengerDi, defenderDi, setDefenderDi}}> 
      {children}
    </StateContext.Provider>
  )
};

export { StateContext, StateProvider };