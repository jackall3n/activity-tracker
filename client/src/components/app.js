import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterRoute from '../routes/register/register';

import AdminRoute from '../routes/admin';

import './app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/register' component={RegisterRoute} />
          <Route path='/' component={AdminRoute} />
        </Switch>
      </Router>
    );
  }
}

export default App;
