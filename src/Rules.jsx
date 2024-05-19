import React from "react";

export default function Rules(){

  return(
    <div>
      <div>
        <h2>How to Play</h2>
      </div>
      <ul>
        <li>  <strong> Setting Up </strong> </li>
        <ul>
          <li> Players enter their name, and the total purse they wish to include for the game </li>
          <li> The first game starts with Player 1 </li>
          <li> After the first game, subsequent games will start with the prior King</li>
          <li> Once a game starts, all players will add 1 coin from their Purse to the Pot</li>
        </ul>
        <li><strong> Actions </strong></li>
        <ul>
          <li> On a player's turn they have 3 options for what action to take: <strong> Roll </strong>, <strong> Bend the Knee </strong>, or in special cases, <strong> Pass </strong></li>
          <li> <strong> Roll: </strong> A player will roll a d6 and add a coin to the Pot. The goal is to roll as high as possible with the outcomes listed below:</li>
            <ul>
              <li> 1: You are out of the game! </li>
              <li> 2: A Peasant's roll, but can beat a King's Di of 6 </li>
              <li> 3: A Fool's Roll, roll again and add another coin to the Pot </li>
              <li> 4: A Noble roll </li>
              <li> 5: A Lordly roll </li>
              <li> 6: A Kingly roll! </li>
            </ul>
            <li><strong> Bend the Knee: </strong> A player may willingly take themselves out of the game. This may be smart if they do not have many coins left in their Purse <br></br>
            Note: If a player start's their turn with 0 coins in their Purse, then they automatically take this action</li>
            <li> <strong> Pass: </strong>Only the King has access to this move, they may pass their turn without rolling or adding to the Pot </li>
        </ul>
        <li><strong> Becoming King </strong></li>
        <ul>
          <li> First player to roll anything but a 1, becomes the King </li>
          <li> Other players will try to beat or tie the King's Di to steal the crown and title</li>
        </ul>
        <li><strong> Dueling </strong></li>
        <ul>
          <li> When a player ties the King's Di, a Duel will begin</li>
          <li> Both the King and the Challenger will roll a d6, the one with the higher roll wins the Duel and keeps or takes the crown <br></br>
          Note: During a duel, neither the King nor Challenger add coins to the Pot </li>
          <li> Status' for rolling a 1 and 3 remain </li>
        </ul>
        <li><strong> Winning </strong></li>
        <ul>
          <li> A player wins by either, being the last one standing or by the King rolling the same number on their King's Di</li>
        </ul> 

        <li>Note: In the event that the last 2 players in the game are in a Duel, and both roll 1's, both players remain in the game, and the Duel continues as normal</li>
      </ul>
  </div>
  )
}