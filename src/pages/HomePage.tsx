import TextLogo from "@/components/TextLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-full col p-4 gap-8">
      <header className="w-full p-16 gap-8 col justify-center items-center">
        <div className="col items-center">
          <h1 className="text-4xl font-light uppercase text-center text-slate-900 dark:text-yellow-300">
            Welcome
          </h1>
          <div className="scale-[5] row justify-center items-center w-[434.84px] h-[140px]">
            <TextLogo themeReverse />
          </div>
        </div>
        <div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem in perferendis! Temporibus ipsum ea magnam commodi itaque
            soluta. In sit a explicabo corrupti cupiditate inventore. Sint
            repudiandae quis voluptas?
          </p>
        </div>
        <div className="row justify-center z-10">
          <Link to="/quiz">
            <Button>ทำแบบทดสอบ</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
