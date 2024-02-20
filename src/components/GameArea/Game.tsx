import { useState } from "react";
import GameStart from "./GameStart";
import WinOrLose from "../Results/WinOrLose";

type GameProps = {
  manageScore: (winner: string) => void;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
};

const Game = ({ manageScore, setWinner }: GameProps) => {
  const [play, setPlay] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [houseSelection, setHouseSelection] = useState("");

  const handleScore = (winner: string): void => {
    manageScore(winner);
  };

  const variety: string[] = ["rock", "paper", "scissors"];

  const generateHouseSelection = (variety: string[]): void => {
    const n = Math.floor(Math.random() * 3);
    setTimeout(() => {
      setHouseSelection(variety[n]);
    }, 500);
  };

  return play ? (
    <WinOrLose
      setWinner={setWinner}
      setPlay={setPlay}
      setUserSelection={setUserSelection}
      setHouseSelection={setHouseSelection}
      userPicked={userSelection}
      housePicked={houseSelection}
      handleScore={handleScore}
    />
  ) : (
    <GameStart
      setPlay={setPlay}
      setUserSelection={setUserSelection}
      variety={variety}
      generateHouseSelection={generateHouseSelection}
    />
  );
};

export default Game;
