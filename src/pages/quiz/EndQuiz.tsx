import { Button } from "@/components/ui/button";
import { reAttempt } from "@/store/slice/quizSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getFeedback, getRandom } from "@/functions/functions";
import Emoji from "@/components/Emoji";

const EndQuiz = () => {
  const dispatch = useDispatch();
  const { score, questions } = useSelector(
    (state: RootState) => state.quiz.value
  );
  const feedback = getFeedback(score, questions.length);

  return (
    <div className="col items-center gap-8 p-8">
      <h1 className="text-4xl font-light uppercase text-center">
        สรุปผลการทดสอบ
      </h1>
      <div className="col items-center gap-4">
        <p>คุณได้คะแนน</p>
        <div className="row gap-4 p-4 px-8 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-4xl font-light">
          <p className="museo-moderno">{score}</p>
          <p className="museo-moderno">/</p>
          <p className="museo-moderno">10</p>
        </div>
      </div>
      {feedback && (
        <div className="col gap-4">
          <Emoji
            emoji={getRandom(feedback.emoji)}
            message={getRandom(feedback.message)}
          />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: [0, 0, 0, 1] }}
        className="z-10"
      >
        <Button
          onClick={() => {
            dispatch(reAttempt());
          }}
        >
          ทำแบบทดสอบอีกครั้ง
        </Button>
      </motion.div>
    </div>
  );
};

export default EndQuiz;
