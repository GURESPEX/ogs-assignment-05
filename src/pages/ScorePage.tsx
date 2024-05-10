import { getAttemptHistory } from "@/functions/functions";

function ScorePage() {
  return (
    <div className="w-full h-full col p-4 gap-8">
      <h1 className="text-4xl font-light uppercase pl-4 border-l-4 border-yellow-300">
        ผลการทดสอบทั้งหมด
      </h1>
      <div className="col gap-2">
        {getAttemptHistory().length ? (
          getAttemptHistory()
            .map(({ score }, index) => (
              <div
                key={index}
                className="col gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
              >
                <div className="row items-start gap-4">
                  <div className="w-8 aspect-square row justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-950">
                    <p className="relative font-light text-slate-900 dark:text-white museo-moderno">
                      {getAttemptHistory().length - index}
                    </p>
                  </div>
                  <p className="relative text-xl font-light row items-center flex-1 h-full">
                    {score} คะแนน
                  </p>
                </div>
              </div>
            ))
            .reverse()
        ) : (
          <div className="col gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="row items-start gap-4">
              <p className="relative text-xl font-light row items-center flex-1 h-full">
                ยังไม่มีผลการทำแบบทดสอบ
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScorePage;
