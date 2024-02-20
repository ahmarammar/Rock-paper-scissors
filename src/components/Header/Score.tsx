import { useEffect, useState } from "react";

type ScoreProps = {
  winner: string;
};

const Score = ({ winner }: ScoreProps) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (winner !== "") {
      if (winner === "user") {
        setPoints(points + 1);
      }
      if (winner === "house") {
        setPoints(points - 1);
      }
    }
  }, [winner]);

  return (
    <div className="w-24 p-2 bg-gray-200 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="font-semibold tracking-wide uppercase text-scoreText text-md">
          score
        </span>
        <h3 className="text-5xl font-extrabold text-scoreText2">{points}</h3>
      </div>
    </div>
  );
};

export default Score;
