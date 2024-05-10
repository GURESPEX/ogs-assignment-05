import { ReactNode } from "react";
import { motion } from "framer-motion";

const pageTransition = (page: ReactNode) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ ease: [0, 0, 0, 1] }}
    >
      {page}
    </motion.div>
  );
};

export default pageTransition;
