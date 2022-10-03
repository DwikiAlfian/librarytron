import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";

export default function NavigationBar() {
  return (
    <>
      <div className="app-inline app-navigation gap-5">
        <div className="app-inline gap-5">
          <FiMinus className="app-navigation-button" size={18} />
          <HiOutlineX className="app-navigation-button" size={18} />
        </div>
      </div>
    </>
  );
}
