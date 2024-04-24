import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from "./components/Home"
import About from "./components/About";

import Contact from './components/Contact';
import Products from './components/Products';
import Login from "./components/Login"

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/login"
          render={(props) => <Login {...props} setAuthenticated={setAuthenticated} />}
        />
        <PrivateRoute
          path="/products"
          component={Products}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
};

export default App;
