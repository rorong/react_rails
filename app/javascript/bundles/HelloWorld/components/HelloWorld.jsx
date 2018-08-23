import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import Login from './Login';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'


export default class App extends React.Component {
  static propTypes = {
    //name: PropTypes.string.isRequired, // this is passed from the Rails view
  };
  constructor(props) {
    super(props);
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    const history = createHistory()
    return (
      <div>
        <Router history={history}>
          <Switch>
           
           <Route
             exact path='/hello_world/'
             component={ Login }
            /> 
            <Route
             exact path='/hello_world/user'
             component={ User }
            /> 
            <Route
              exact path='/hello_world/admin'
              component={ Admin }
            />
            <Route
              exact path='/hello_world/adminlogin'
              component={ AdminLogin }
            />   
            <Route
              exact path='/hello_world/userlogin'
              component={ UserLogin }
            />
        </Switch>
      </Router>
      </div>
    );
  }
}
