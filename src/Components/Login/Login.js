
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
import Validator from "../../Validator";

function Login() {
  const history = useHistory();
  const [value, setValue] = useState({
    "email" : "",
    "password": ""
  })
  const [errors, setErrors] = useState({});
 
 
  const signIn = (e) => {
    e.preventDefault();
    setErrors(Validator(value));
    
    if (!errors.email && !errors.password) {
      auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((authObject) => {
          history.push("/");
      })
      .catch((error) => alert(error.message));
    }
   
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then((authObject) => {   
        // it successfully created a new user with email and password
        if (auth) {         
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            name="email"
            type="text"
            value={value.email}
            onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
          />
          {errors.email && <p className="errors">{errors.email}</p>}

          <h5>Password</h5>
          <input
            name="password"
            type="password"
            value={value.password}
            onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
          />
           {errors.password && <p className="errors">{errors.password}</p>}

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

