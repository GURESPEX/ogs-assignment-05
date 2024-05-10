import { useSelector } from "react-redux";
import AttemptQuiz from "./quiz/AttemptQuiz";
import EndQuiz from "./quiz/EndQuiz";
import StartQuiz from "./quiz/StartQuiz";
import { RootState } from "@/store/store";
import pageTransition from "@/animation/pageTransition";
import { Fragment } from "react/jsx-runtime";
import { AnimatePresence } from "framer-motion";

function QuizPage() {
  const { started, ended } = useSelector(
    (state: RootState) => state.quiz.value
  );

  return (
    <AnimatePresence mode="wait">
      <Fragment key={!started ? "start" : "attempt"}>
        {pageTransition(
          <div className="w-full h-full col p-4 gap-8">
            {!started ? <StartQuiz /> : !ended ? <AttemptQuiz /> : <EndQuiz />}
          </div>
        )}
      </Fragment>
    </AnimatePresence>
  );
}

export default QuizPage;
