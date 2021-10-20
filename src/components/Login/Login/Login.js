import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Login.css'


const Login = () => {
  const { signInWithEmail, handleGoogleSignIn, userEmail, userPassword, error,massege } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const signInUsingGoogle = () => {
    setIsLoading(true);
    handleGoogleSignIn()
      .then(result => {
        history.push(location.state?.from || '/home');
        // setUser(result.user);
        console.log(result.user);
      })
      .finally(() => setIsLoading(false));

  }

  return (
    <div className="login-container">
      <h2 className="text-success py-3 fs-3 fw-bold">{massege}</h2>
      <div className="w-25 m-auto p-3 mt-3 border rounded">
        <h2 className="text-secondary mb-3">Please Log in</h2>
        <div className="text-danger" style={{ height: "50px" }}>
          {error}
        </div>
        <form>
          <input onChange={userEmail} className="form-control mb-3" type="email" name="" id="" placeholder="E-mail" />
          <input onChange={userPassword} className="form-control mb-3" type="password" name="" id="" placeholder="Password" />
          <input onClick={signInWithEmail} className="btn btn-secondary mb-3" type="submit" value="Login" />
        </form>
        <p>Or</p>
        <p className="text-secondary">Sign in with</p>
        <button onClick={signInUsingGoogle} className="btn btn-success me-2">Google</button>
        <p className="mt-3">
          New user? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;