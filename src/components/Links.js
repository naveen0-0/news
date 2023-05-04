import * as React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../utils/constants";

export default function Links() {
  return (
    <div className="links">
      {navbarLinks.map((link) => (
        <Link to={link.link} key={link.id} className="link">
          {link.text}
        </Link>
      ))}
    </div>
  );
}
