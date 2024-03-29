import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

function Login() {
  const [showInputs, setShowInputs] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('Login');

  const handleLoginClick = () => {
    setAction("Login");
    setShowInputs(true);
  };

  const handleCreateAccountClick = () => {
    setAction("Create Account");
    setShowInputs(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const userData = {
      username: username,
      password: password
    };
    console.log(userData);
  
    return JSON.stringify(userData);
  };

  return (
    <div className="login-container">
      {!showInputs && (
        <div className="button-container">
          <button onClick={handleLoginClick} className="login-button">
            Login
          </button>
          <button onClick={handleCreateAccountClick} className="create-account-button">
            Create Account
          </button>
        </div>
      )}
      {showInputs && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            {action}
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
