import { Menu } from "@/types/types";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type Props = Menu;

const NavigationButton = ({
  text,
  to,
  icon,
  iconPosition = "left",
  iconOnly = false, // main,
}: Props) => {
  const location = useLocation();

  return (
    <Link
      key={to}
      className={`relative row items-center gap-2 rounded uppercase text-sm text-slate-500 hover:text-slate-400 active:text-slate-300 transition-all group`}
      to={to}
    >
      {icon && (
        <div
          className={`row justify-center items-center p-1 w-8 text-lg aspect-square ${
            iconOnly ? "border hover:bg-slate-200 transition-all" : ""
          } rounded-lg ${iconPosition !== "left" ? "order-2" : ""}`}
        >
          {icon}
        </div>
      )}
      {!iconOnly && <p>{text}</p>}
      {location.pathname === to && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: [0, 0, 0, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-slate-500 group-hover:bg-slate-400 group-active:bg-slate-300"
        />
      )}
      {/* {main && (
        <div className="absolute bottom-0 right-0 w-0 h-px bg-slate-500 group-hover:bg-slate-400 group-active:bg-slate-300 group-hover:left-0 group-hover:w-full transition-[width]"></div>
      )} */}
    </Link>
  );
};

export default NavigationButton;
