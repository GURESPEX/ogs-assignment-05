import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";
import { Badge } from "./ui/badge";

type Props = {
  current: number;
  length: number;
};

const Steps = ({ current, length }: Props) => {
  const createStep = () => {
    const elements: ReactNode[] = [];
    Array(length)
      .fill(null)
      .forEach((_, index) => {
        const stepElement = (
          <div
            key={`step-${index}`}
            className={`w-4 aspect-square row items-center justify-center rounded-full ${
              current > index - 1
                ? "bg-slate-900 dark:bg-yellow-300"
                : "bg-slate-200"
            }`}
          >
            <div
              className={`w-3 aspect-square row justify-center items-center rounded-full ${
                current > index - 1
                  ? "bg-white dark:bg-slate-900"
                  : "bg-slate-200"
              }`}
            />
          </div>
        );
        const lastStepElement = (
          <div
            key={`lastStep-${index}`}
            className={`w-10 aspect-square row items-center justify-center rounded-full border-2 ${
              current > index - 1
                ? "border-slate-900 dark:border-yellow-300"
                : "border-slate-200"
            }`}
          >
            <div
              className={`w-8 aspect-square row justify-center items-center text-sm rounded-full border ${
                current > index - 1
                  ? "border-slate-900 bg-slate-900 dark:border-yellow-300 dark:bg-yellow-300"
                  : "border-slate-200 bg-slate-200"
              }`}
            >
              <FaCheck
                className={`${
                  current > index - 1
                    ? "text-white dark:text-slate-900"
                    : "text-white dark:text-slate-900"
                }`}
              />
            </div>
          </div>
        );
        if (index !== length - 1) {
          elements.push(stepElement);
        } else {
          elements.push(lastStepElement);
        }
        if (index < length - 1) {
          elements.push(
            <div
              key={`line-${index}`}
              className={`flex-1 h-[2px] ${
                current > index
                  ? "bg-slate-900 dark:bg-yellow-300"
                  : "bg-slate-200"
              }`}
            />
          );
        }
      });
    return elements;
  };

  return (
    <div className="row items-center gap-4">
      <Badge className="dark:bg-yellow-300">Start</Badge>
      <div className="row items-center flex-1"> {createStep()}</div>
      <Badge className="dark:bg-yellow-300">End</Badge>
    </div>
  );
};

export default Steps;
