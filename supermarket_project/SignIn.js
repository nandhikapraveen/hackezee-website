import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import React Router components
import './styles.css'; // Import your CSS file

function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server).
    // You can add code to post the data to the server using Axios or fetch.

    // After successful submission, navigate to the "Hello" page
    history.push('/hello');
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
      <h1>Sign In Page</h1>
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
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
