import React from "react";

import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <IconContext.Provider value={{}}>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <img src={require('../assets/1C.gif')} alt="" />
            <div className="ezp">Extreme <br />Weather<br /> Events</div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
