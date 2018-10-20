import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    /*const response = await fetch('/users');
    const users = await response.json();

    this.setState({
      users
    })*/
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/'>
                <div>Home</div>
            </Route>
            <Route path='/register'>
                <div>Register Here</div>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
