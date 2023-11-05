import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import React Router components
import './styles.css'; // Import your CSS file

function LogIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., validate credentials).
    // You can add code to send data to the server and validate the login.

    // After successful login, navigate to the "Welcome" page
    history.push('/welcome');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Log In Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
