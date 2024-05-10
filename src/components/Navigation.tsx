import NavigationButton from "@/components/NavigationButton";
import { menus } from "@/data/MenusData";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Navigation = () => {
  return (
    <nav className="row justify-between p-4 py-2 gap-8">
      <div className="h-full row items-center gap-8">
        <div className="h-full row items-center gap-8">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="h-full row items-center gap-8">
          {menus.map((menuProps, index) => (
            <NavigationButton key={index} {...menuProps} />
          ))}
        </div>
      </div>
      <div className="h-full row items-center gap-4">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
