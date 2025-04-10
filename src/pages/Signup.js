import React, { useState } from 'react';
import { registerUser } from '../api/userAPI'; // ✅ Corrected import path
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { name, email, password };
      const response = await registerUser(userData);

      // Show success message
      setMessage(response.message || 'User registered successfully!');
      setIsError(false);

      // Optional: clear form after success
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Show error message
      setMessage(error.message || 'Error registering user');
      setIsError(true);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Create Account</button>
        </form>

        {message && (
          <p style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
            {message}
          </p>
        )}

        <div className="signup-footer">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>

      <div className="bodima-text">
        <h1>BODIMA</h1>
      </div>
    </div>
  );
};

export default Signup;
