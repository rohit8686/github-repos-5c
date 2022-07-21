import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
      <h2>GitHub Repos</h2>
      <Link to="/" className="link">
        <h4>Home</h4>
      </Link>
    </nav>
  );
};
