import React, {useState, createContext} from "react";

const StateContext = createContext(null);

const StateProvider = ({children}) => {
  const [totalPot, setTotalPot] = useState(0);
  const [count, setCount] = useState(0)
  const [di, setDi] = useState(0)
 
  return(
    <StateContext.Provider value={{totalPot, setTotalPot, count, setCount, di, setDi}}> 
      {children}
    </StateContext.Provider>
  )
};

export { StateContext, StateProvider };