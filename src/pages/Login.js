import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="login-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Create an Account</a>
        </div>
      </div>
      <div className="bodima-text">
        <h1>BODIMA</h1>
      </div>
    </div>
  );
};

export default Login;
