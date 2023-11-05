import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import LogIn from './LogIn';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={LogIn} />
          {/* Define routes for "Hello" and "Welcome" pages */}
          <Route path="/hello" render={() => <h1>Hello Page</h1>} />
          <Route path="/welcome" render={() => <h1>Welcome Page</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

