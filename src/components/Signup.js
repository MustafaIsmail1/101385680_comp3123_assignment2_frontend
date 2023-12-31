import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = 
  useState('');
  const [email, setEmail] = 
  useState('');
  const [password, setPassword] = 
  useState('');
  const [error, setError] = 
  useState('');
  const navigate = 
  useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8585/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      console.log('Signup Response:', response);
  
      if (response.ok) {
   
        setUsername('');
        setEmail('');
        setPassword('');
  
    
        navigate('/login');
      } else {
        setError('Sign up failed. Please check your information.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('An error occurred during sign up');
    }
  };
  
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign up</h2>
      <div>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <button style={styles.button} onClick={handleSignup}>Signup</button>
      {error && <p style={styles.error}>{error}</p>}
      <p>
        Already have an account?{' '}
        <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#2c3e50', 
    color: '#ecf0f1',
  },
  heading: {
    textAlign: 'center',
    color: '#ecf0f1',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#ecf0f1', 
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#3498db', 
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: '#e74c3c',
    marginTop: '10px',
    textAlign: 'center',
  },
};
export default Signup;
