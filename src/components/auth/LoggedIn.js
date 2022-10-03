import React from "react";
import CJ from "../../assets/images/cj.webp";

export default function LoggedIn() {
  return (
    <>
      <div className="cs-user-logged">
        <img className="cs-user-logged-profile" src={CJ} />
        <div className="cs-column gap-5">
          <span className="cs-span-title">Carl "Ucok" Johnson</span>
          <span className="cs-span-text">Administrator</span>
        </div>
      </div>
    </>
  );
}
