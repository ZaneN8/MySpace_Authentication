import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// For Basic setup only please change
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const correctNavBar = () => {
    if (user) {
      return (
        <>
          <div
            style={({ color: "blue" }, { cursor: "pointer" })}
            onClick={() => handleLogout(history)}
          >
            Logout
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">Login</Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/register">Register</Link>
        </>
      );
    }
  };

  return (
    <div style={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <span style={{ marginRight: "10px" }}></span>
        {user && <Link to="/landing">My Page</Link>}
      </div>
      <div>{correctNavBar()}</div>
    </div>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;
