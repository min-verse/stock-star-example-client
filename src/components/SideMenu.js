import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
    </aside>
  );
}

export default SideMenu;
