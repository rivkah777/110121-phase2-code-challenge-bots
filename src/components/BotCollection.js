import React from "react";
 import BotCard from "./BotCard";


function BotCollection({bot,armyBot,clickBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">   //keep getting type error Cannot read propeties of undefined reading'map could not fix it
      {bot.map((bot) => (
         
          <BotCard
          key={bot.id} 
          bot={bot} 
          handleClick={armyBot}
          clickBot={clickBot}/>
        ))}
       
      </div>
    </div>
  );
}

export default BotCollection;
