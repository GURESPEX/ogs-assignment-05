import { ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

export type Question = {
  question: string;
  answer: Answer;
} & Choice;

export type Choice = {
  A: string;
  B: string;
  C: string;
  D: string;
};

export type Answer = keyof Choice;

export type Course = { id: number; name: string };

export type AttemptHistory = {
  score: number;
};

export type Menu = {
  main?: boolean;
  text: string;
  to: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
};

export type Feedback = {
  range: number;
  message: string[];
  emoji: ReactNode[];
};
