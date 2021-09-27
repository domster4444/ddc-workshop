import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Login from './pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route
          path="/user"
          component={() => {
            return <User />;
          }}
        />
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
