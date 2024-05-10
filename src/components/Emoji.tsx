import { motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";

type Props = {
  emoji: ReactNode;
  message: string;
};

const Emoji = ({ emoji, message }: Props) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  const messageVariants: Variants = {
    initial: {
      scale: 0.75,
      opacity: 0,
      transition: { ease: [0, 0, 0, 1], duration: 0.2 },
    },
    animate: { scale: 1, opacity: 1 },
  };
  return (
    <motion.div
      initial={false}
      animate={onHover ? "animate" : "initial"}
      className="relative"
      onPointerEnter={() => setOnHover(true)}
      onPointerLeave={() => setOnHover(false)}
    >
      <div className="relative top-[11px] text-[8rem] z-10 -my-4 scale-125">
        {emoji}
      </div>
      <motion.div
        variants={messageVariants}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-0 left-full -translate-y-full">
          <div className="w-max p-2 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-t-lg rounded-r-lg">
            <p className="relative top-[2px] text-xl">{message}</p>
            <div
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              className="absolute left-0 top-full w-2 aspect-square bg-slate-900 dark:bg-white"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Emoji;
