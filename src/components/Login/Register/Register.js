import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Register.css'


const Register = () => {
  const { error, getName, isLogin, getEmail, userRegistration, getPassword, useremail } = useAuth();
  return (
    <div className="register-container">
      <div className="w-25 m-auto p-3 mt-3 border rounded custom-width">
      <h2 className="text-primary text-center mb-3">Please Resister</h2>
        <div className="text-danger" style={{ height: "50px" }}>
          {error}
        </div>
        <form onSubmit={userRegistration}>
          {!isLogin && <input
            onChange={getName}
            className="form-control mb-3"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          }
          {/* <input
          onChange={getImage}
          className="form-control mb-3"
          type="text"
          name=""
          id=""
          placeholder="Image URL"
        /> */}
          <input
            onChange={getEmail}
            className="form-control mb-3"
            type="email"
            name=""
            id=""
            placeholder="E-mail"
          />
          <input
            onChange={getPassword}
            className="form-control mb-3"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <input
            onClick={userRegistration}
            className="btn btn-info text-light"
            type="submit"
            value="Register"
          />
        </form>
        <p className="mt-3">
          Already registered? <Link to="/login">Log in</Link> here{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;