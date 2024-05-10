import { CoursesData } from "@/data/CoursesData";
import { Course } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState: {
  value: {
    courses: { course: Course; score: number }[];
  };
} = {
  value: {
    courses: CoursesData.map((course) => ({ course, score: 8 })),
  },
};

export const evaluateSlice = createSlice({
  name: "evaluate",
  initialState,
  reducers: {
    evaluateCourse: (
      state,
      action: PayloadAction<{ courseId: number; score: number }>
    ) => {
      const selectedCourseIndex = state.value.courses.findIndex(
        ({ course }) => course.id === action.payload.courseId
      );
      if (state.value.courses[selectedCourseIndex]) {
        state.value.courses[selectedCourseIndex].score = action.payload.score;
      } else {
        console.log(`Course Id ${action.payload.courseId} was not found!`);
      }
    },
  },
});

export const { evaluateCourse } = evaluateSlice.actions; // To change value

export default evaluateSlice.reducer; // Export to configure in store
