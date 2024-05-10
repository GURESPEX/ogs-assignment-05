import pageTransition from "@/animation/pageTransition";
import NotFound from "@/pages/error/NotFound";
import EvaluatePage from "@/pages/EvaluatePage";
import HomePage from "@/pages/HomePage";
import QuizPage from "@/pages/QuizPage";
import ScorePage from "@/pages/ScorePage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={pageTransition(<HomePage />)} />
        <Route path="quiz" element={pageTransition(<QuizPage />)} />
        <Route path="score" element={pageTransition(<ScorePage />)} />
        <Route path="eval" element={pageTransition(<EvaluatePage />)} />
        <Route path="*" element={pageTransition(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
