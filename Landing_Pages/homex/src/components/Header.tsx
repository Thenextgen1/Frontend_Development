import MobileNav from "./menus/MobileNav";
import DesktopNav from "./menus/DesktopNav";

const Header = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
