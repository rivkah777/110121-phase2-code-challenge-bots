import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({bot,armyBot,clickBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {bot.map((bot) => (
          <BotCard
          key={bot.id} 
          bot={bot} 
          handleClick={armyBot}
          clickBot={clickBot}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
