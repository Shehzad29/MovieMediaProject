import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/register.css';

function Registration() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the registration data
    const registrationData = {
      email: email,
      username: username,
      password: password,
    };

    try {
      const response = await fetch('https://chimerical-sunburst-f3342f.netlify.app/.netlify/functions/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.status === 200) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          setRegistrationSuccess(false);
          navigate('/login');
        }, 3000);
      } else {
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="button-group" type="submit">
          Register
        </button>
      </form>
      {registrationSuccess && (
        <div className="registration-success">
          Registration successful. Redirecting to login...
        </div>
      )}
    </div>
  );
}

export default Registration;
