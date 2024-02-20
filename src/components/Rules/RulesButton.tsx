type RulesButtonProps = {
  handleRules: () => void;
};

const RulesButton = ({ handleRules }: RulesButtonProps) => {
  const clickRules = () => {
    handleRules();
  };

  return (
    <div className="flex justify-center mt-52">
      <button
        className="px-12 py-2 text-xl font-semibold tracking-wide text-gray-300 uppercase border-2 border-gray-300 rounded-lg outline-none"
        onClick={clickRules}>
        rules
      </button>
    </div>
  );
};

export default RulesButton;
