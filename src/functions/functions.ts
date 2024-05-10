import { Feedbacks } from "@/data/FeedbacksData";
import { AttemptHistory } from "@/types/types";

export const getFeedback = (score: number, max: number) =>
  Feedbacks.find((feedback) => score / max >= feedback.range);

export const getRandom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const saveScore = (score: number) => {
  const attemptHistory = getAttemptHistory();
  if (attemptHistory) {
    attemptHistory.push({ score });
    if (attemptHistory.length > 10) {
      attemptHistory.shift();
    }
    localStorage.setItem("attempt-history", JSON.stringify(attemptHistory));
  }
};

export const getAttemptHistory = () => {
  const attemptHistoryJSON = localStorage.getItem("attempt-history");
  if (attemptHistoryJSON) {
    const attemptHistory: AttemptHistory[] = JSON.parse(attemptHistoryJSON);
    return attemptHistory;
  } else {
    const initialValue: AttemptHistory[] = [];
    localStorage.setItem("attempt-history", JSON.stringify(initialValue));
    return initialValue;
  }
};
