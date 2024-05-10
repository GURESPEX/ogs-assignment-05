import EvaluateCourse from "@/components/EvaluateCourse";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

function EvaluatePage() {
  const courses = useSelector(
    (state: RootState) => state.evaluate.value.courses
  );
  const [min, max] = [0, 10];

  return (
    <div className="w-full h-full col p-4 gap-8">
      <h1 className="text-4xl font-light uppercase pl-4 border-l-4 border-yellow-300">
        ประเมินคอร์สเรียน
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {courses ? (
          courses.map(({ course, score }, index) => (
            <EvaluateCourse
              key={index}
              min={min}
              max={max}
              course={course}
              score={score}
              index={index}
            />
          ))
        ) : (
          <div>บ่มีคอร์ส</div>
        )}
      </div>
    </div>
  );
}

export default EvaluatePage;
