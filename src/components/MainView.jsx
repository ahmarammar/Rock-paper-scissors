import React, { useState } from 'react'
import GameView from './GameArea/GameView';
import RulesView from "./Rules/RulesView"

const MainView = () => {

  const [viewRules, setViewRules] = useState(false);

  const showRules = () => {
    if(viewRules === false){
      setViewRules(true);
    }else{
      setViewRules(false);
    }
  }

  return viewRules ? <RulesView showRules={showRules} /> : <GameView showRules={showRules} />
  
}

export default MainView