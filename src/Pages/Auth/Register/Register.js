import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="registerComp">
        <div className="name">Register</div>
        <div className="inputs">
          <input type="Email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <input type="Password" placeholder="Confirm Password" />
          <button className="btnRegister">Register</button>
        </div>
        <div className="redirect">
          <Link to="/login" className="btn btn-primary">
            login
          </Link>
        </div>
      </div>
      <div className="registerImg">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Register;
