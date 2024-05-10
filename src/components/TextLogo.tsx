import { FaPencilRuler } from "react-icons/fa";

const TextLogo = ({ themeReverse = false }: { themeReverse?: boolean }) => {
  return (
    <div className="row items-center">
      <div
        className={`museo-moderno ${
          themeReverse
            ? "dark:text-yellow-300 text-slate-950"
            : "text-yellow-300 dark:text-slate-950"
        } mr-[1px]`}
      >
        D
      </div>
      <div
        className={`w-5 relative left-[-1px] aspect-square row justify-center items-center ml-[1px] rounded-full ${
          themeReverse
            ? "dark:bg-yellow-300 bg-slate-950"
            : "bg-yellow-300 dark:bg-slate-950"
        }`}
      >
        <FaPencilRuler
          className={`text-xs ${
            themeReverse
              ? "dark:text-slate-950 text-yellow-300"
              : "text-slate-950 dark:text-yellow-300"
          }`}
        />
      </div>
      <div
        className={`museo-moderno ${
          themeReverse
            ? "dark:text-yellow-300 text-slate-950"
            : "text-yellow-300 dark:text-slate-950"
        }`}
      >
        QUIZ
      </div>
    </div>
  );
};

export default TextLogo;
