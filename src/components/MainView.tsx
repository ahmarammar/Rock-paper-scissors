import { useState } from "react";
import RulesView from "./Rules/RulesView";
import GameView from "./GameArea/GameView";

const MainView = () => {
  const [viewRules, setViewRules] = useState<boolean>(false);

  const showRules = (): void => {
    if (viewRules === false) {
      setViewRules(true);
    } else {
      setViewRules(false);
    }
  };

  return viewRules ? (
    <RulesView showRules={showRules} />
  ) : (
    <GameView showRules={showRules} />
  );
};

export default MainView;
