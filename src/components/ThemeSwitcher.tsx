import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeIconVariants: Variants = {
    initial: { y: 40 },
    animate: { y: 0 },
    exit: { y: -40 },
  };

  return (
    <button
      className="relative w-10 aspect-square row justify-center items-center rounded-full bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 dark:from-yellow-600 dark:via-yellow-300 dark:to-yellow-300 border border-slate-900 dark:border-yellow-300 uppercase overflow-hidden"
      onClick={toggleTheme}
    >
      <div
        style={{ maskImage: "radial-gradient(#000 25%, transparent 75%)" }}
        className="relative w-full h-full"
      >
        <AnimatePresence>
          {theme === "light" && (
            <motion.div
              key="light"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={themeIconVariants}
              transition={{ ease: [0, 0, 0, 1] }}
              className="absolute w-full h-full top-0 left-0 row justify-center items-center text-yellow-300 dark:text-slate-950 text-xl"
            >
              <AiFillSun />
            </motion.div>
          )}
          {theme === "dark" && (
            <motion.div
              key="dark"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={themeIconVariants}
              transition={{ ease: [0, 0, 0, 1] }}
              className="absolute w-full h-full top-0 left-0 row justify-center items-center text-yellow-300 dark:text-slate-950 text-xl"
            >
              <AiFillMoon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
