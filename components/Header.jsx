// Components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
