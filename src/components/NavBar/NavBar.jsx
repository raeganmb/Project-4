import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons";
import { NavData } from "./NavData";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="welcome">{user && <span>Welcome,<br /> {user.name}</span>}</li>
            {NavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="logoutlink">
            <Link to="" onClick={handleLogOut} className="logout">
              Log Out
            </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
