import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="title-containre">
        <h4>The Artifacts</h4>
        <p><i>The Culture & Art Blogs</i></p>
      </div>
      <nav className="nav-container">
        <ul>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
