import { Feedbacks } from "@/data/FeedbacksData";

export const getFeedback = (score: number, max: number) =>
  Feedbacks.find((feedback) => score / max >= feedback.range);

export const getRandom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];
