import { useState } from "react";
import Header from "../Header/Header";
import RulesButton from "../Rules/RulesButton";
import Game from "./Game";

type GameViewProps = {
  showRules: () => void;
};

const GameView = ({ showRules }: GameViewProps) => {
  const [winner, setWinner] = useState<string>("");

  const handleRules = (): void => {
    showRules();
  };

  const handleScore = (win: string): void => {
    setWinner(win);
  };

  return (
    <div className="min-h-screen p-9 md:p-12 bg-gradient-to-b from-bgFirst to-bgSecond">
      <div className="relative max-w-xs mx-auto">
        <div className="flex flex-col">
          <Header winner={winner} />
          <Game manageScore={handleScore} setWinner={setWinner} />
        </div>
        <RulesButton handleRules={handleRules} />
      </div>
    </div>
  );
};

export default GameView;
