import React,{useEffect,useState} from "react";
import BotsPage from "./BotsPage";
// import BotCard from "./BotCard";




function App() {
  const[bot,setBot] = useState ([]);
  
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((setBot));
  }, []);
  
  function armyBot(bot,isArmy = true){
    setBot(bot.map((b) => (b.id === bot.id ?{...b, cast: isArmy } : b)));
  }

  function clickBot(bot) {
    armyBot(bot.filter((b) => b.id !== bot.id));
  }


  return (
    <div className="App">
    <BotsPage 
    bot={bot} 
     armyBot={armyBot} 
     clickBot={clickBot} /> 
      
    </div>   
      
    
  );
}

export default App;
