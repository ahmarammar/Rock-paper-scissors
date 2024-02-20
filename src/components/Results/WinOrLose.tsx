import React, { useState } from "react";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";

type WinOrLostProps = {
  userPicked: string;
  housePicked: string;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setUserSelection: React.Dispatch<React.SetStateAction<string>>;
  setHouseSelection: React.Dispatch<React.SetStateAction<string>>;
  handleScore: (win: string) => void;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
};

const WinOrLose = ({
  userPicked,
  housePicked,
  setPlay,
  setUserSelection,
  setHouseSelection,
  handleScore,
  setWinner,
}: WinOrLostProps) => {
  const [showHousePicked, setShowHousePicked] = useState<boolean>(false);
  const [showWin, setShowWin] = useState<boolean>(false);
  const [showLose, setShowLose] = useState<boolean>(false);
  const [showDraw, setShowDraw] = useState<boolean>(false);

  const playAgain = (): void => {
    setTimeout(() => {
      setWinner("");
    }, 1000);
    setUserSelection("");
    setHouseSelection("");
    setShowWin(false);
    setShowLose(false);
    setShowDraw(false);
    setPlay(false);
    setShowHousePicked(false);
  };

  let left: string, right: string;
  if (userPicked === "rock") {
    left = rock;
  } else if (userPicked === "paper") {
    left = paper;
  } else {
    left = scissors;
  }

  if (housePicked === "rock") {
    right = rock;
  } else if (housePicked === "paper") {
    right = paper;
  } else {
    right = scissors;
  }

  if (housePicked !== "") {
    setTimeout(() => {
      setShowHousePicked(true);
      whowins(userPicked, housePicked);
    }, 500);
  }

  const whowins = (user: string, house: string) => {
    if (user === "paper" && house === "rock") {
      handleScore("user");
      setShowWin(true);
    } else if (user === "rock" && house === "scissors") {
      handleScore("user");
      setShowWin(true);
    } else if (user === "scissors" && house === "paper") {
      handleScore("user");
      setShowWin(true);
    } else {
      if (user === house) {
        handleScore("draw");
        setShowDraw(true);
      } else {
        handleScore("house");
        setShowLose(true);
      }
    }
  };

  return (
    <div className="relative left-4 min-h-[14rem] mt-32 flex flex-col gap-[5.75rem]">
      <div className="relative flex justify-between right-3">
        <div className="flex flex-col items-center gap-10">
          <img
            src={left}
            alt=""
            className={`bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-${userPicked}Ring hover:scale-105 transition-transform`}
          />
          <span className="text-lg font-extrabold text-gray-200 uppercase">
            you picked
          </span>
        </div>
        <div className="flex flex-col items-center gap-10">
          {showHousePicked ? (
            <img
              src={right}
              alt=""
              className={`bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-${housePicked}Ring hover:scale-105 transition-transform`}
            />
          ) : (
            <div className="bg-black/20 p-6 w-24 h-24 rounded-full hover:scale-105 transition-transform`"></div>
          )}
          <span className="text-lg font-extrabold text-gray-200 uppercase">
            the house picked
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        {showWin && (
          <div className="absolute top-52 right-[4.1rem] flex flex-col gap-10 items-center">
            <h2 className="text-5xl font-extrabold tracking-wide text-gray-100 uppercase">
              You Win
            </h2>
            <button
              className="px-12 py-3 text-2xl font-extrabold tracking-wider uppercase text-scoreText2 bg-gray-50 rounded-xl hover:opacity-80"
              onClick={playAgain}>
              play again
            </button>
          </div>
        )}

        {showLose && (
          <div className="absolute top-52 right-[4.1rem] flex flex-col gap-10 items-center">
            <h2 className="text-5xl font-extrabold tracking-wide text-gray-100 uppercase">
              You Lose
            </h2>
            <button
              className="px-12 py-3 text-2xl font-extrabold tracking-wider uppercase text-scoreText2 bg-gray-50 rounded-xl hover:opacity-80"
              onClick={playAgain}>
              play again
            </button>
          </div>
        )}

        {showDraw && (
          <div className="absolute top-52 right-[4.1rem] flex flex-col gap-10 items-center">
            <h2 className="text-5xl font-extrabold tracking-wide text-gray-100 uppercase">
              Draw
            </h2>
            <button
              className="px-12 py-3 text-2xl font-extrabold tracking-wider uppercase text-scoreText2 bg-gray-50 rounded-xl hover:opacity-80"
              onClick={playAgain}>
              play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinOrLose;
