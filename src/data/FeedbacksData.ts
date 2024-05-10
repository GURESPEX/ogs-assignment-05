import { Feedback } from "@/types/types";

export const Feedbacks: Feedback[] = [
  {
    range: 1,
    message: ["เก่งเกินไปแล้ว!", "ม้ามืดนี่หว่า", "โห! สุดยอด!", "สุดจัด"],
    emoji: ["😍", "🤫", "🤯", "🤓"],
  },
  {
    range: 0.75,
    message: ["เก่งมาก"],
    emoji: ["🥹", "😎", "🫠"],
  },
  {
    range: 0.5,
    message: ["ก็ใช้ได้"],
    emoji: ["🙂‍", "😌"],
  },
  {
    range: 0.25,
    message: ["ได้แค่นี้ก็เก่งแล้ว"],
    emoji: ["🥺"],
  },
  {
    range: 0,
    message: ["ไม่เป็นไร ครั้งหน้าเอาใหม่"],
    emoji: ["😩", "😔", "😞"],
  },
];
