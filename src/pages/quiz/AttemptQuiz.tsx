import {
  changeChoice,
  nextQuestion,
  prevQuestion,
  submitAttempt,
} from "@/store/slice/quizSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import Choice from "@/components/Choice";
import { Answer } from "@/types/types";
import Steps from "@/components/Steps";

const AttemptQuiz = () => {
  const dispatch = useDispatch();
  const { current, questions, selectedChoices } = useSelector(
    (state: RootState) => state.quiz.value
  );

  const next = () => {
    dispatch(nextQuestion());
  };

  const prev = () => {
    dispatch(prevQuestion());
  };

  return (
    <div className="col gap-8">
      <div>
        <Steps current={current} length={questions.length} />
      </div>
      {questions
        .map(({ question }, index) => (
          <div key={index} className="col gap-2">
            <div className="col gap-4">
              <div className="col gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="row items-start gap-4">
                  <div className="w-8 aspect-square row justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-950">
                    <p className="relative font-light text-slate-900 dark:text-white museo-moderno">
                      {index + 1}
                    </p>
                  </div>
                  <p className="relative top-[4px] text-xl font-light row items-center flex-1 h-full">
                    {question}
                  </p>
                </div>
              </div>
              <div className="col gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <RadioGroup
                  className="col gap-2"
                  defaultValue={selectedChoices[index]}
                  onValueChange={(value: Answer) => {
                    dispatch(changeChoice({ index, answer: value }));
                  }}
                >
                  <Choice value="A" label={questions[index].A} />
                  <Choice value="B" label={questions[index].B} />
                  <Choice value="C" label={questions[index].C} />
                  <Choice value="D" label={questions[index].D} />
                </RadioGroup>
              </div>
            </div>
            <div className="row justify-end gap-2">
              {current !== 0 && (
                <Button
                  className="w-32"
                  type="button"
                  variant="outline"
                  onClick={prev}
                >
                  Previous
                </Button>
              )}
              {current !== questions.length - 1 ? (
                <Button
                  className="w-32"
                  type="button"
                  variant="outline"
                  onClick={next}
                >
                  Next
                </Button>
              ) : (
                <Button
                  className="w-32"
                  type="button"
                  onClick={() => {
                    dispatch(submitAttempt());
                  }}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        ))
        .filter((_, index) => current === index)}
    </div>
  );
};

export default AttemptQuiz;
