import { Button } from "@/components/ui/button";
import { startQuiz } from "@/store/slice/quizSlice";
import { useDispatch } from "react-redux";

const StartQuiz = () => {
  const dispatch = useDispatch();
  return (
    <div className="col items-center gap-8 p-8">
      <h1 className="text-4xl font-light uppercase text-center">
        แบบทดสอบก่อนเรียน
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        architecto aspernatur, recusandae dignissimos esse possimus molestias
        sint neque, voluptas tempore aliquid! Harum excepturi consequuntur
        cupiditate nisi? Cum eaque pariatur rerum.
      </p>
      <Button
        className="row gap-2"
        onClick={() => {
          dispatch(startQuiz());
        }}
      >
        เริ่มทำแบบทดสอบ
      </Button>
    </div>
  );
};

export default StartQuiz;
