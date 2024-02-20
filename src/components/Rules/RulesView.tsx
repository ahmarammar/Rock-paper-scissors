import close from "../../assets/images/icon-close.svg";
import rules from "../../assets/images/image-rules.svg";

type RulesViewProps = {
  showRules: () => void;
};

const RulesView = ({ showRules }: RulesViewProps) => {
  const handleRules = (): void => {
    showRules();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-48 bg-gray-50 md:p-12 p-9">
      <h2 className="text-5xl font-extrabold tracking-wide uppercase">rules</h2>
      <img src={rules} alt="" className="h-64" />
      <button onClick={handleRules}>
        <img src={close} alt="" className="transition-all hover:scale-110" />
      </button>
    </div>
  );
};

export default RulesView;
