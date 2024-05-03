// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import QuizComponent from './components/QuizComponent';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthComponent} />
        <PrivateRoute path="/quiz" component={QuizComponent} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
