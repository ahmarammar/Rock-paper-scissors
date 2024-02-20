import Paper from "./PickItems/Paper";
import Rock from "./PickItems/Rock";
import Scissors from "./PickItems/Scissors";
import triangle from "../../assets/images/bg-triangle.svg";

type GameStartProps = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setUserSelection: React.Dispatch<React.SetStateAction<string>>;
  generateHouseSelection: (varity: string[]) => void;
  variety: string[];
};

const GameStart = ({
  setPlay,
  setUserSelection,
  generateHouseSelection,
  variety,
}: GameStartProps) => {
  const handlePlay = (): void => {
    setPlay(true);
    generateHouseSelection(variety);
  };

  return (
    <div className="flex justify-center mt-40 relative min-h-[14rem]">
      <img src={triangle} alt="" className="h-56" />
      <Rock handlePlay={handlePlay} setUserSelection={setUserSelection} />
      <Paper handlePlay={handlePlay} setUserSelection={setUserSelection} />
      <Scissors handlePlay={handlePlay} setUserSelection={setUserSelection} />
    </div>
  );
};

export default GameStart;
