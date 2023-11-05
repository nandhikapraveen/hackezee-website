import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Header;

