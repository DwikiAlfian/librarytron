import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="cs-navbar">
        <Link to="/" className="cs-navbar-active">
          Books
        </Link>
        <Link to="/">Employee</Link>
        <Link to="/">Absences</Link>
      </div>
    </>
  );
}
