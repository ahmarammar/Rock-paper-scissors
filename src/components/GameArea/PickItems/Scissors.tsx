import React from "react";
import scissors from "../../../assets/images/icon-scissors.svg";

type ScissorsProps = {
  handlePlay: () => void;
  setUserSelection: React.Dispatch<React.SetStateAction<string>>;
};

const Scissors = ({ handlePlay, setUserSelection }: ScissorsProps) => {
  const selectScissors = (): void => {
    setUserSelection("scissors");
    handlePlay();
  };

  return (
    <button onClick={selectScissors}>
      <img
        src={scissors}
        alt=""
        className="absolute bottom-44 right-0 bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-scissorsRing hover:scale-110 transition-transform"
      />
    </button>
  );
};

export default Scissors;
