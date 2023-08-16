import React from "react";
import "./Login.scss";
import loginImage from "../../../Assets/undraw_mobile_login_re_9ntv.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginComp">
      <div className="loginWrapper">
        <div className="loginImage">
          <img src={loginImage} alt="error" />
        </div>
        <div className="loginComp">
          <div className="name">Login</div>
          <div className="input">
            <input type="text" placeholder="Enter your Email" />
            <input type="password" placeholder="Enter your Password" />
          </div>
          <button className="btnLogin">Login</button>
          <p>
            New User ?
            <span>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
