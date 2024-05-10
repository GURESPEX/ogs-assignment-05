import Router from "@/router/Router";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="w-screen h-screen relative col gap-4 items-center overflow-auto text-slate-900 dark:text-white bg-white dark:bg-slate-950">
      <motion.div
        initial={{ y: -57 }}
        animate={{ y: 0 }}
        transition={{ ease: [0, 0, 0, 1] }}
        className="z-20 w-full sticky top-0 col items-center border-b border-slate-200 bg-slate-100 dark:bg-slate-900 dark:border-slate-800"
      >
        <div className="w-full max-w-screen-lg h-full col gap-4">
          <Navigation />
        </div>
      </motion.div>
      <div className="w-full col items-center z-10">
        <div className="w-full max-w-screen-lg h-full col gap-4 overflow-hidden">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
