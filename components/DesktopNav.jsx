"use client";

import Menu from "./Menu";

function DesktopNav() {
  return (
    <div className="hidden xl:flex items-center gap-8">
      <nav className="flex gap-8">
        <Menu
          className={`capitalize font-medium hover:text-accent transition-all`}
        />
      </nav>
    </div>
  );
}

export default DesktopNav;
