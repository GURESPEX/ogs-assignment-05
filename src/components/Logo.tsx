import TextLogo from "@/components/TextLogo";

const Logo = ({
  withOutBackground = false,
}: {
  withOutBackground?: boolean;
}) => {
  return (
    <div
      className={`w-max row items-center gap-2 p-4 py-1 rounded-full ${
        withOutBackground
          ? ""
          : "bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 dark:from-yellow-600 dark:via-yellow-300 dark:to-yellow-300 border border-slate-900 dark:border-yellow-300"
      } uppercase text-xl text-yellow-300 dark:text-slate-900`}
    >
      <TextLogo />
    </div>
  );
};

export default Logo;
