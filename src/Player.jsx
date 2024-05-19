import React, {useState, useContext, useEffect} from "react";
import './Player.css'
import { StateContext } from "./context/StateContext";
import crown from "./assets/goldcrown.png"
import cancel from "./assets/cancel.png"


function Player(props){

  const [playerName, setPlayerName] = useState('');
  const [playerNameChange, setPlayerNameChange] = useState('')
  const [purse, setPurse] = useState(10)
  const [purseChange, setPurseChange] = useState(10)
  const [toggleName, setToggleName] = useState(false)
  const [togglePurse, setTogglePurse] = useState(false)
  const [playerOut, setPlayerOut] = useState(false)
  const[localKing, setLocalKing] = useState(false)


  const {di, setDi, totalPot, setTotalPot, gameOn, setGameOn, turn, players, setPlayers, outCount, setOutCount, king, kingDi, duplicate, setDuplicate, setEndTurn, setKing, setKingDi, duel, setDuel, setChallengerDi, setDefenderDi, setRollAgain} = useContext(StateContext)

  //if the king changes, updates player component to turn crown on or off
  useEffect(() => {
    if(king === props.num) setLocalKing(true)
    else{
      setLocalKing(false)
    }
  }, [king])

  //if the turn changes, checks if player is out or is last player in
  useEffect(() => {

    // console.log('turn', turn)
    // console.log('player '+ props.num + ' playerOut: ', playerOut)
    
    //if current player is out, it will go to the next turn
    if(playerOut && turn === props.num) {
      setEndTurn(true)
      return
    }
    //else at the top of your turn it will check if you are the last player
    //and if so, it will end the game
    else if(outCount === players.length -1 && !playerOut && turn === props.num) {
      // console.log('outCount', outCount)
      // console.log('playerCount',players.length)
      setGameOn(false)
    } 
    //if the turn changes and you have 0 money imOut will fire
    //and turn will go to next player
    else if(purse === 0 && turn === props.num) {
      imOut()
      return
    }

  }, [turn])

  //if the game is turned off, players statuses updates
  useEffect(() => {

    if(gameOn) setPurse(purse -1)

    setKingDi(null)

    if(!gameOn && turn === props.num && !playerOut) youWin()
    else if(!gameOn && turn > 0){
      // console.log('resetting player ', props.num)
      setPurseChange(purse)
      setTogglePurse(false)
      setPlayerOut(false)
    }
  },[gameOn])

  useEffect(() => {

    //console.log('di changed')

    if(di === 3){
      //console.log('should be roll again')
      setRollAgain(true)
      return
    }

    //conditional to fire kingCheck only for player whose turn it is
    if(turn === props.num) kingCheck()
  }, [di, duplicate])

  //player component functionalities

  const placeholder = 'Player ' + props.num;

  const onPlayerNameChangeUpdate = (e) => {
    e.preventDefault();

    setPlayerNameChange(event.target.value);
  }

  const onSubmitPlayerName = (e) => {
    e.preventDefault();
    
    setPlayerName(playerNameChange);
    setToggleName(true)
  }

  const onPurseChange = (e) => {
    e.preventDefault()

    setPurseChange(event.target.value)
  }

  const confirmPurse = (e) => {
    e.preventDefault();

    setPurse(purseChange)
    setTogglePurse(true)
  }

  const rollCycle = (e) => {
    e.preventDefault()
    //console.log('rolling')

    setPurse(purse -1)
    setTotalPot(totalPot +1)

    const myRoll = rollDi()

    if(myRoll === 1 && turn === props.num) imOut();
    if(myRoll === di) {
      //console.log('duplicate roll')
      setDuplicate(!duplicate)
    }
    setDi(myRoll);
    return
  }

  const pass = (e) => {
    e.preventDefault()

    setEndTurn(true)
    return

  }

  const challengeRoll = (e) => {
    e.preventDefault()

    //console.log('challenging')

    const challenger = rollDi()

    if(challenger === 1) {
      setPlayerOut(true)
      setOutCount(outCount +1)
    }

    setChallengerDi(challenger)

    return
  }

  const defenderRoll = (e) => {
    e.preventDefault()

    //console.log('defending')

    const defender = rollDi()
    
    if(defender === 1) {
      setPlayerOut(true)
      setOutCount(outCount +1)
    }

    setDefenderDi(defender)

    return
  }

  //removes the player component from the playerContainer
  const removePlayer = (e) =>{
    if(players.length > 1) {
      for(let i = 0; i < players.length; i++){
        //console.log('removing player')
        if(players[i].props.num === props.num) {
          setPlayers(players.toSpliced(i, 1));
          break;
        }
      }
    }
  }

  //game functionalities

  const rollDi = () => {

    const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1)

    return roll
  }

  const kingCheck = () => {

    //if it's not the king's turn or the player rolled anything besides a 1
    if(turn !== king && di !== 1){
      //console.log('enter 1')
      if(di > kingDi){
        //console.log('enter 1-1')
        setKing(turn)
        setKingDi(di)
      }
      
      else if(kingDi === 6 && di === 2){
        //console.log('enter 1-2')
        setKing(turn)
        setKingDi(di)
      }
      else if(di === kingDi){
        setDuel(true)
        return
      }
    }
    //if it's the king's turn
    else if(king === turn) {
      //console.log('enter 2')
      if(di === kingDi) {
        //console.log('enter 2-1')
        setGameOn(false)
        return
        //setTurn(turn -1)
      }
      else if(di > kingDi) {
        //console.log('enter 2-2')
        setKingDi(di)
      }
        else if(playerOut){
        //console.log('enter 2-3')
        setLocalKing(false)
        setKing(null)
        setKingDi(null)
      }

    }
    setEndTurn(true)
    return;
  }

  const youWin = () => {
    if(king !== turn) setKing(props.num)
    //console.log('winner' + props.num)
    setPurseChange(purse + totalPot)
    setTogglePurse(false)
    return
  }

  const imOut = (e) => {
    if(king === props.num){
      setKing(null)
      setKingDi(null)
    }
    //console.log('setting player ' + props.num +' out')
    setPlayerOut(true)
    setOutCount(outCount +1)
    //console.log('outCount', outCount +1)
    setEndTurn(true)
    return
  }

  return(
    <div className="player" >
      <div>
      {localKing && (<img src={crown} alt="crown"  width="75"></img>)}
      {playerOut && (<img src={cancel} alt="cancel"  width="50" height="50"></img>)}
      </div>
      <form id="formBasicPlayer" >
        <label> {placeholder} </label>
        {!toggleName && (
        <div>
        <input
        id="playerName"
        type="text"
        placeholder={placeholder}
        value={playerNameChange}
        onChange={onPlayerNameChangeUpdate}
        />
        <button onClick={onSubmitPlayerName}> Submit Name </button>
        </div>
        )}
        {toggleName && (
          <p>{playerName}</p>
        )}
        <label> Purse </label>
       {!togglePurse && (<><input
        id="purse"
        type="number"
        value={purseChange}
        onChange={onPurseChange}
        />
        <button onClick ={confirmPurse}>Confirm Purse</button>
        </>)}
        {togglePurse && (<p > {purse} </p>)}

      </form>
      <div>
        {!gameOn && (<button onClick={removePlayer}>Leave the Table</button>)}
      {gameOn && turn === props.num && !duel && !playerOut &&(
        <div> <button onClick={rollCycle}> 
          Roll
        </button> 
        <button onClick={imOut}> 
          I'm Out
        </button>
        {king === props.num && 
        <button onClick={pass}>
          Pass
          </button>} 
        </div>)}
      {duel && turn === props.num && (<button onClick={challengeRoll}> Challenge Roll </button>)}
      {duel && king === props.num && (<button onClick={defenderRoll}> Defend Roll </button>)}
      </div>
    </div>
  )

};

export default Player