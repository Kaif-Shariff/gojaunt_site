"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";

const NavBar = ({ className }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* home route  */}

        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>

        {/* delete route */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Delete Account"
        ></MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
