import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Register = () => {
  const { error,toggleLogin, getName,isLogin, getImage, getEmail, userRegistration, getPassword,useremail} = useAuth();
  return (
    <div className="w-25 m-auto p-3 my-5 border rounded">
      <h1 className="text-primary text-center">{isLogin ? 'Please Login' : 'Please Register'}</h1>
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
      </form>
      <button onClick={userRegistration} type="submit" className="btn btn-primary">{isLogin? 'Login' : 'Submit'}</button>
      <div className="mt-3">
      <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Already Register?</label>
      </div>
    </div>
  );
};

export default Register;