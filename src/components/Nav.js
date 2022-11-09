import React from "react";
import { Image, Link } from "@chakra-ui/react";

function Nav() {
  return (
    <div className="header">
      <a href="/Home">
        <Image className="logo" src="logo.png" />
      </a>
      <nav>
        <ul className="nav-link">
          <li>
            <Link href="/Programs">Programs</Link>
          </li>
          <li>
            <Link href="/Events">Events</Link>
          </li>
          <li>
            <Link href="/Activites">Activites</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <Link href="/SignIn">
            <button className="btn">Sign In</button>
          </Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
