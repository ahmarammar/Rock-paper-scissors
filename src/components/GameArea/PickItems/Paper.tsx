import paper from "../../../assets/images/icon-paper.svg";

type PaperProps = {
  handlePlay: () => void;
  setUserSelection: React.Dispatch<React.SetStateAction<string>>;
};

const Paper = ({ handlePlay, setUserSelection }: PaperProps) => {
  const selectPaper = (): void => {
    setUserSelection("paper");
    handlePlay();
  };

  return (
    <button onClick={selectPaper}>
      <img
        src={paper}
        alt=""
        className="absolute bottom-44 left-0 bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-paperRing hover:scale-110 transition-transform"
      />
    </button>
  );
};

export default Paper;
