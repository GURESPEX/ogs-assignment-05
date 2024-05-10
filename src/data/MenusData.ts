import { Menu } from "@/types/types";

export const menus: Menu[] = [
  {
    main: true,
    text: "Home",
    to: "/",
  },
  { text: "Quiz", to: "/quiz" },
  { text: "Score", to: "/score" },
  { text: "Evaluate the course", to: "/eval" },
];
