import React from "react";
import { MenuItems } from "./MenuItems";
function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="logo-cont"></div>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li className={item.cName} key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
