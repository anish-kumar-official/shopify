import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerWrapper">
      {/* <div className="logo"></div> */}
      <div className="name">
        Shop<span>ify</span>.
      </div>
      <div className="rightWrapper">
        <div className="routing">
          <ul>
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "normalNav"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "normalNav"
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="routing">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "normalNav"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "normalNav"
                }
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
