import { NavLink } from "react-router-dom";
import { isUserLoggedIn, logout } from "../services/AuthService";
import logo from "../assets/black-silhouette-on-a-airplane.jpg";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = isUserLoggedIn();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      {isAuth && (
        <>
          <div>
            <NavLink to="/home" className={classes.link}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/book" className={classes.link}>
              Book
            </NavLink>
          </div>
          <div>
            <NavLink to="/flight" className={classes.link}>
              Flight
            </NavLink>
          </div>
          <div>
            <NavLink to="/" onClick={handleLogout} className={classes.logout}>
              Logout
            </NavLink>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
