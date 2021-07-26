import React, { useRef } from "react";
import { useAuth } from "../../context/AuthContext";

import "./Login.css";

function Login() {
  const { signup, login } = useAuth();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function registerToApp(e) {
    e.preventDefault();

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function loginToApp(e) {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error.message);
      alert("Failed to sign in");
    }
  }

  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png"
        alt="company-logo"
      />

      <form>
        <input
          type="text"
          placeholder="Full name required if registering"
          ref={fullNameRef}
        />
        <input type="text" placeholder="Profile pic URL optional" />
        <input type="email" placeholder="Email" required ref={emailRef} />
        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?&nbsp;
        <span className="login__register" onClick={registerToApp}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
