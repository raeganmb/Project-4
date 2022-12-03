import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/gallery">Art Gallery</Link>
      &nbsp; | &nbsp;
      <Link to="/collections">My Collections</Link>
      &nbsp; | &nbsp;
      {user && <span>Welcome, {user.name}</span>}
      &nbsp;{" "}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
