import { Slider } from "@/components/ui/slider";
import { evaluateCourse } from "@/store/slice/evaluateSlice";
import { Course } from "@/types/types";
import { useDispatch } from "react-redux";

type Props = {
  min: number;
  max: number;
  course: Course;
  score: number;
  index: number;
};

const EvaluateCourse = ({ min, max, course, score, index }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      key={course.id}
      className="col gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
    >
      <div className="row items-start gap-4">
        <div className="w-8 aspect-square row justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-950">
          <p className="relative font-light text-slate-900 dark:text-white museo-moderno">
            {index + 1}
          </p>
        </div>
        <p className="relative text-xl font-light row items-center flex-1 h-full">
          {course.name}
        </p>
      </div>
      <div className="row items-center gap-4">
        <Slider
          onValueChange={([value]) => {
            dispatch(evaluateCourse({ courseId: course.id, score: value }));
          }}
          defaultValue={[score]}
          min={min}
          max={max}
          step={1}
        />

        <div className="row justify-center items-center w-24 py-1 rounded-lg bg-slate-900 dark:bg-yellow-300 text-white dark:text-slate-900 gap-1">
          <div className="museo-moderno">{score}</div>
          <div className="museo-moderno">/</div>
          <div className="museo-moderno">{max}</div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateCourse;
