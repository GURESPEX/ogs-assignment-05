import { QuestionsData } from "@/data/QuestionsData";
import { Answer, AttemptHistory, Question } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState: {
  value: {
    current: number;
    started: boolean;
    ended: boolean;
    score: number;
    selectedChoices: (Answer | undefined)[];
    attemptHistory: AttemptHistory[];
    questions: Question[];
  };
} = {
  value: {
    current: 0,
    started: false,
    ended: false,
    score: 0,
    selectedChoices: Array(QuestionsData.length).fill(undefined),
    attemptHistory: [],
    questions: QuestionsData,
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.value.started = true;
    },
    nextQuestion: (state) => {
      state.value.current += 1;
    },
    prevQuestion: (state) => {
      state.value.current -= 1;
    },
    changeChoice: (
      state,
      action: PayloadAction<{ index: number; answer: Answer }>
    ) => {
      state.value.selectedChoices[action.payload.index] = action.payload.answer;
    },
    submitAttempt: (state) => {
      const { questions, selectedChoices } = state.value;
      selectedChoices.forEach((answer, index) => {
        if (answer === questions[index].answer) {
          state.value.score += 1;
        }
      });
      state.value.attemptHistory.push({ score: state.value.score });
      if (state.value.attemptHistory.length > 10) {
        state.value.attemptHistory.shift();
      }
      state.value.ended = true;
    },
    reAttempt: (state) => {
      state.value.current = 0;
      state.value.started = false;
      state.value.ended = false;
      state.value.score = 0;
      state.value.selectedChoices = [];
    },
  },
});

export const {
  startQuiz,
  nextQuestion,
  prevQuestion,
  changeChoice,
  // answerQuestion,
  submitAttempt,
  reAttempt,
  // finishQuiz,
} = quizSlice.actions; // To change value

export default quizSlice.reducer; // Export to configure in store
